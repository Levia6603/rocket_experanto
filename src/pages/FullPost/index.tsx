import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiBase from "../../Api";
import {
  Wrapper,
  Header,
  Container,
  Info,
  Calendar,
  Needs,
  Plans,
  Certifications,
  Certification,
  Tags,
  Tag,
  Buttons,
  PopUp,
} from "./styles";
import Comments from "../../components/Comments";
import star from "/profile_box_icons/star-yellow.svg";
import like from "/profile_box_icons/heart.svg";
import ApplySchedule from "../../components/ApplySchedule";
import Apply from "../../components/Apply";
import { Btn } from "../../styles/Btn";
import { ProfileType } from "../../pages/ProfileIndex";
import Toast from "../../components/Toast";

import { RootStateType } from "../../../redux";
import {
  setToastText,
  toggleToast,
} from "../../../redux/toastState/toastStateSlice";

export interface PostInterface {
  userName?: string;
  userLocations?: string;
  userAvatar?: string;
  title?: string;
  tags?: string;
  skills?: { language: string; languageId: number; goal: string[] }[];
  startDate?: string;
  learn?: { Id: number; Name: string; content: string }[];
  endDate?: string;
  availableHours?: any;
  image?: string[];
  isFavorite?: boolean | undefined;
  commentsCount: number;
}
interface TimeData {
  Sun?: { start: string; end: string }[];
  Mon?: { start: string; end: string }[];
  Tue?: { start: string; end: string }[];
  Wed?: { start: string; end: string }[];
  Thu?: { start: string; end: string }[];
  Fri?: { start: string; end: string }[];
  Sat?: { start: string; end: string }[];
}
interface SelectTimeData {
  Sun?: { start: string; end: string; select: boolean }[];
  Mon?: { start: string; end: string; select: boolean }[];
  Tue?: { start: string; end: string; select: boolean }[];
  Wed?: { start: string; end: string; select: boolean }[];
  Thu?: { start: string; end: string; select: boolean }[];
  Fri?: { start: string; end: string; select: boolean }[];
  Sat?: { start: string; end: string; select: boolean }[];
}

function FullPost() {
  const toastState = useSelector((state: RootStateType) => state.toast.toast);
  const [post, setPost] = useState({} as PostInterface);
  const [timeData, setTimeData] = useState<TimeData>({});
  const [tags, setTags] = useState(String);
  const [tagAry, setTagAry] = useState([] as string[]);
  const [selectTime, setSelectTime] = useState<SelectTimeData>({});
  const [applyState, setApplyState] = useState(false);
  const [profile, setProfile] = useState({} as ProfileType);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  //* 接回 Post List
  async function getPost(id: string) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const post: PostInterface = await axios({
        method: "GET",
        url: `${apiBase.GET_POST}/${id}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPost(post);
      setTags(post.tags || "");

      const availableTime: TimeData = post.availableHours;
      setTimeData(availableTime);
      //在時間
      let selectData: SelectTimeData = {};
      Object.entries(availableTime).forEach((arr) => {
        const [week, time] = arr;
        const newTime = time.map((el: { start: string; end: string }) => {
          return { ...el, select: false };
        });
        selectData = { ...selectData, [week]: newTime };
      });
      setSelectTime(selectData);
    } catch (error) {
      console.error(error);
    }
  }
  async function checkPermission(id: string) {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const message = await axios
      .get(`${apiBase.GET_CHECK_PERMISSION}/${id}`, {
        headers,
      })
      .then((res) => res.data.message)
      .catch((err) => err.response.data.Message);

    if (message === "可申請") {
      setApplyState(true);
    } else if (message === "無相關擅長語言，無法申請該貼文。") {
      dispatch(setToastText("無相關擅長語言，無法申請該貼文。"));
      dispatch(toggleToast());
    }
  }

  async function getProfile() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const profile: ProfileType = await axios({
        method: "GET",
        url: apiBase.GET_PROFILE,
        headers: headers,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
      setProfile(profile);
    } catch (error) {
      console.error(error);
    }
  }

  //*接回 Post List
  useEffect(() => {
    getPost(id || "");
    getProfile();
  }, []);

  useEffect(() => {
    const tagList = tags.split(",");
    setTagAry(tagList);
  }, [tags]);

  return (
    <>
      {toastState && <Toast />}
      {applyState && (
        <PopUp>
          <Apply
            exchangeLanguage={{
              post: post.skills?.[0].language || "",
              apply: post.learn?.[0].Name || "",
            }}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
            setApplyState={setApplyState}
          />
        </PopUp>
      )}
      <Wrapper>
        <Container>
          <Header>
            <div>
              <img src={post?.userAvatar} alt="" />
            </div>
            <div>
              <div>
                <h4>{post?.userName}</h4>
              </div>
              <div>
                <div title="評價">
                  <div>
                    <img src={star} alt="stars" />
                  </div>
                  <p>
                    {profile?.Score} <span>({profile?.ScoreCount})</span>
                  </p>
                </div>

                <div>
                  <div>
                    {post?.isFavorite ? (
                      <img src={like} alt="liked" />
                    ) : (
                      <img src={like} alt="like" />
                    )}
                  </div>
                  <p>{post?.isFavorite ? "已收藏" : "收藏"}</p>
                </div>
              </div>
            </div>
          </Header>
          <Info>
            <div>
              <h4>{post?.title}</h4>
            </div>
            <div>
              <p>
                交換期限:<span>{`${post?.startDate} - ${post?.endDate}`}</span>
              </p>
              <p>
                縣市地區:<span>{post?.userLocations}</span>
              </p>
            </div>
          </Info>
          <Calendar>
            <div>
              <h5>每週有空的時段</h5>
            </div>
            <div>
              <ApplySchedule timeData={timeData} />
            </div>
          </Calendar>
          <Needs>
            <div>
              <h5>想交換的語言</h5>
            </div>
            <div>
              <div>
                <h6>想學語言:</h6>
                <p>
                  <span>{post.learn?.[0].Name || ""}</span>
                </p>
              </div>
              <div>
                <h6>學習動機:</h6>
                <p>{post.learn?.[0].content || ""}</p>
              </div>
            </div>
          </Needs>
          <Plans>
            <div>
              <h5>教學計畫</h5>
            </div>
            <div>
              <h6>教學語言：</h6>
              <div>
                <p>{post?.skills?.[0].language || ""}</p>
                <ol>
                  {post.skills?.[0].goal?.map((goal, index) => (
                    <li key={index}>
                      <span>{index + 1}. </span>
                      {goal}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Plans>
          <Certifications>
            <div>
              <h5>語言證書檔案</h5>
            </div>
            <div>
              {post.image?.map((el, i) => (
                <Certification>
                  <img key={i} src={el} alt="no certification" />
                </Certification>
              ))}
            </div>
          </Certifications>
          <Tags>
            <div>
              <h5># Tags</h5>
            </div>
            <div>
              {tags &&
                tagAry?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
            </div>
          </Tags>
          <Buttons>
            <Btn
              $style="outline"
              type="button"
              onClick={() => {
                navigate("/home/index");
              }}
            >
              返回貼文搜尋
            </Btn>
            <Btn
              $style="primary"
              type="button"
              onClick={() => {
                checkPermission(id || "");
              }}
            >
              申請
            </Btn>
          </Buttons>
        </Container>
        <Comments />
      </Wrapper>
    </>
  );
}

export default FullPost;
