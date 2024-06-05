import { useEffect, useState } from "react";
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
  PostButton,
} from "./styles";
import Comments from "../../components/Comments";
import star from "/profile_box_icons/star-yellow.svg";
import like from "/profile_box_icons/heart.svg";
import noCertification from "/no-certification-lg.svg";
import ApplySchedule from "../../components/ApplySchedule";

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
  images?: string[];
  isFavorite?: boolean;
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

function FullPost() {
  const [post, setPost] = useState({} as PostInterface);
  const [timeData, setTimeData] = useState<TimeData>({});
  const [tags, setTags] = useState(String);
  const [tagAry, setTagAry] = useState([] as string[]);

  //* 接回 Post List
  async function getPost(id: number) {
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
      setTimeData(post.availableHours);
    } catch (error) {
      console.error(error);
    }
  }

  //*接回 Post List
  useEffect(() => {
    getPost(4);
  }, []);

  useEffect(() => {
    const tagList = tags.split(",");
    setTagAry(tagList);
  }, [tags]);

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <div>
              <img src={post?.userAvatar} alt="" />
            </div>
            <div>
              <div>
                <h4>{post?.userName}</h4>
                <p>{post?.userLocations}</p>
              </div>
              <div>
                <div title="評價">
                  <div>
                    <img src={star} alt="stars" />
                  </div>
                  <p>
                    5.0 <span>(1)</span>
                  </p>
                </div>

                <div title="收藏">
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
              <div>
                <p>發文有效日</p>
                <p>{`${post?.startDate} - ${post?.endDate}`}</p>
              </div>
              <div>
                <p>所在城市</p>
                <p>{post?.userLocations}</p>
              </div>
            </div>
          </Info>
          <Calendar>
            <div>
              <h6>可交換時間</h6>
            </div>
            <div>
              <ApplySchedule timeData={timeData} />
            </div>
          </Calendar>
          <Needs>
            <div>
              <h6>需求</h6>
            </div>
            <div>
              <div>
                <h6>我想學：</h6>
                <p>{post.learn?.[0].Name || ""}</p>
              </div>
              <div>
                <h6>我希望可以：</h6>
                <p>{post.learn?.[0].content || ""}</p>
              </div>
            </div>
          </Needs>
          <Plans>
            <div>
              <h6>你可以學到：</h6>
            </div>
            <div>
              <div>
                <h6>教學語言：</h6>
                <p>{post?.skills?.[0].language || ""}</p>
              </div>

              <div>
                {post.skills?.[0].goal?.map((goal, index) => (
                  <p key={index}>
                    <span>{index + 1}. </span>
                    {goal}
                  </p>
                ))}
              </div>
            </div>
          </Plans>
          <Certifications>
            <div>
              <h6>證書</h6>
            </div>
            <div>
              {post?.images?.map((image, index) => (
                <Certification key={index}>
                  <img src={image} alt="no certification" />
                  <h6>托福</h6>
                </Certification>
              ))}

              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
            </div>
          </Certifications>
          <Tags>
            <div>
              <h6># Tags</h6>
            </div>
            <div>
              {tags &&
                tagAry?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
            </div>
          </Tags>
          <Buttons>
            <PostButton>回到上一頁</PostButton>
            <PostButton>申請</PostButton>
          </Buttons>
        </Container>
        <Comments />
      </Wrapper>
    </>
  );
}

export default FullPost;
