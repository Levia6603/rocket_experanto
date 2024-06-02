import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiBase from "../../Api";
import { RootStateType } from "../../../redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import {
  Wrapper,
  Container,
  Header,
  Certifications,
  CloseBtn,
  OpenBtn,
  ControlBar,
} from "./styles";
import { Calendar, Needs, Plans, Tags, Tag } from "../../pages/FullPost/styles";
import Schedule from "../Schedule";
import { PostInterface } from "../../pages/FullPost";
import { Certification } from "../../pages/FullPost/styles";
//* pictures
import close from "/close-lg.svg";
import newPage from "/box-arrow-up-right.svg";
import avatar from "/avatar-80.svg";
import location from "/map-pin.svg";
import comments from "/message.svg";
import liked from "/profile_box_icons/heart.svg";

// interface Props {
//   post: PostInterface;
//   tags: string;
//   tagAry: string[];
// }
function SlidingPost() {
  //* 設定 redux toolkit
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootStateType) => state.sliding.slidingPostState
  );
  const postId = useSelector((state: RootStateType) => state.postId.postId);

  //* 寫入資料
  const [post, setPost] = useState({} as PostInterface);
  const [tags, setTags] = useState(String);
  const [tagAry, setTagAry] = useState([] as string[]);

  //* loading 狀態
  const [loading, setLoading] = useState(false);

  //* 接回指定 Post
  async function getPost(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      setLoading(true); //* 設定 loading 狀態，當取得資料完成後會設定為 false
      const post: PostInterface = await axios({
        method: "GET",
        url: `${apiBase.GET_POST}/${id}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPost(post);
      setTags(post.tags || "");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  //* 監聽是否可見，當可見時取得資料
  useEffect(() => {
    if (isVisible === true) {
      getPost(Number(postId));
    }
  }, [isVisible, postId]);

  //* 將 tags 轉成陣列
  useEffect(() => {
    const tagList = tags.split(",");
    setTagAry(tagList);
  }, [tags]);

  return (
    <>
      {loading && <div style={{ display: "none" }}>Loading...</div>}
      <Wrapper $isVisible={isVisible}>
        <ControlBar>
          <CloseBtn
            onClick={() => {
              dispatch(setSlidingPostState());
            }}
          >
            <img src={close} alt="close" />
          </CloseBtn>
          <OpenBtn onClick={() => navigate("/home/post")}>
            <p>觀看完整貼文</p>
            <img src={newPage} alt="Direct to full post" />
          </OpenBtn>
        </ControlBar>

        <Container>
          <Header>
            <div>
              <img src={avatar} alt="Avatar" />
            </div>

            <div>
              <div>
                <h2>{post?.userName}</h2>
                <div>
                  {post?.isFavorite ? (
                    <img src={liked} alt="liked" />
                  ) : (
                    <img src={liked} alt="liked" />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <img src={location} alt="Location" />
                </div>
                <p>{post?.userLocations}</p>
              </div>
              <div>
                <div>
                  <img src={comments} alt="comments" />
                </div>
                <p>
                  <span> 5 </span>
                  則留言
                </p>
              </div>
            </div>
          </Header>
          <Calendar>
            <div>
              <h6>可交換時間</h6>
            </div>
            <div>
              <Schedule />
            </div>
          </Calendar>
          <Needs>
            <div>
              <h6>{"學習需求"}</h6>
            </div>
            <div>
              <div>
                <h6>我想學：</h6>
                <p>{post?.learn?.[0].Name}</p>
              </div>
              <div>
                <h6>我希望可以：</h6>
                <p>{post?.learn?.[0].content}</p>
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
                <p>{post.skills?.[0].language}</p>
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
        </Container>
      </Wrapper>
    </>
  );
}

export default SlidingPost;
