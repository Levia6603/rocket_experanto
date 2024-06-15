import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../redux";
import { setSlidingMatchingState } from "../../../redux/slidingState/slidingSlice";
import {
  Wrapper,
  Container,
  Header,
  Certifications,
  Certification,
  CloseBtn,
  ControlBar,
} from "./styles";
import { Calendar, Needs, Plans } from "../../pages/FullPost/styles";
import ApplySchedule from "../ApplySchedule";
import { Btn } from "../../styles/Btn";

import close from "/close-lg.svg";
import location from "/map-pin.svg";

type MatchingPost = {
  ApplicationId: number;
  ApplyContent: string;
  Appointments: any;
  Certifications: string[];
  Code: number;
  ReceiverAvatar: string;
  ReceiverLocation: string;
  ReceiverName: string;
  Status: string;
  TeachLanguageId: number;
  TeachLanguageName: string;
  WantToLanguageId: number;
  WantToLanguageName: string;
  TeachPlan: {
    language: string;
    languageId: number;
    plan: string[];
  }[];
  message: string;
};

function SlidingMatching() {
  //* 路由
  const navigate = useNavigate();
  //* 設定Redux toolkit，控制是否顯示 offcanvas
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootStateType) => state.sliding.slidingMatchingState
  );
  //* loading 狀態
  const [loading, setLoading] = useState(false);
  const postId = useSelector((state: RootStateType) => state.postId.postId);
  const [post, setPost] = useState({} as MatchingPost);

  //* 取得指定 Post
  async function getPost(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      setLoading(true); //* 設定 loading 狀態，當取得資料完成後會設定為 false
      const post: MatchingPost = await axios({
        method: "GET",
        url: `${apiBase.GET_MATCHING_LIST}/${id}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPost(post);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  //* 同意申請 POST
  async function agreeExchange(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      setLoading(true); //* 設定 loading 狀態，當取得資料完成後會設定為 false
      await axios({
        method: "POST",
        url: `${apiBase.POST_AGREE_APPLY}`,
        headers: headers,
        data: {
          ApplicationId: id,
          isApproved: true,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  //* 同意交換
  const handleAgreeExchange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    agreeExchange(post.ApplicationId);
    dispatch(setSlidingMatchingState());
    navigate(`/user/exchanging/${post.ApplicationId}`);
  };

  //* 監聽是否可見，當可見時取得資料
  useEffect(() => {
    if (isVisible === true) {
      getPost(Number(postId));
    }
  }, [isVisible, postId]);

  return (
    <>
      {post && (
        <Wrapper $isVisible={isVisible}>
          {loading && <p>Loading...</p>}
          <ControlBar>
            <CloseBtn
              onClick={() => {
                dispatch(setSlidingMatchingState());
              }}
            >
              <img src={close} alt="close" />
            </CloseBtn>
          </ControlBar>

          <Container>
            <Header>
              <div>
                <div>
                  <img src={post.ReceiverAvatar} alt="Avatar" />
                </div>
              </div>

              <div>
                <div>
                  <h2>{post.ReceiverName}</h2>
                </div>
                <div>
                  <div>
                    <img src={location} alt="Location" />
                  </div>
                  <p>{post.ReceiverLocation}</p>
                </div>
              </div>
            </Header>
            <Calendar>
              <div>
                <h6>每週可交換時段：</h6>
              </div>
              <div>
                <ApplySchedule timeData={post.Appointments} />
              </div>
            </Calendar>
            <Needs>
              <div>
                <h6>{"想交換的語言"}</h6>
              </div>
              <div>
                <div>
                  <h6>{"想學語言："}</h6>
                  <p>{post.WantToLanguageName}</p>
                </div>
                <div>
                  <h6>學習動機：</h6>

                  <p>{post.ApplyContent}</p>
                </div>
              </div>
            </Needs>
            <Plans>
              <div>
                <h6>教學計畫</h6>
              </div>
              <div>
                <h6>教學語言：</h6>
                <div>
                  <p>{post.TeachPlan?.[0].language}</p>
                  <ol>
                    {post.TeachPlan?.[0].plan?.map((plan, index) => (
                      <li key={index}>
                        <span>{index + 1}. </span>
                        {plan}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Plans>
            <Certifications>
              <div>
                <h6>證書</h6>
              </div>
              <div>
                {post.Certifications?.map((certification, index) => (
                  <Certification key={index}>
                    <img src={certification} alt="證書" />
                  </Certification>
                ))}
              </div>
            </Certifications>
            <div>
              <Btn $style="outline">拒絕申請</Btn>
              <Btn $style="primary" onClick={handleAgreeExchange}>
                同意申請
              </Btn>
            </div>
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default SlidingMatching;
