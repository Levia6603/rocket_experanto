import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiBase from "../../Api";
import { headers } from "../../Api";
import { RootStateType } from "../../../redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import {
  Wrapper,
  Container,
  Header,
  Certifications,
  CloseBtn,
  ControlBar,
} from "./styles";
import {
  Calendar,
  Needs,
  Plans,
  Tags,
  Tag,
  Certification,
} from "../../pages/FullPost/styles";

import { PostInterface } from "../../pages/FullPost";

//* pictures
import close from "/close-lg.svg";
import newPage from "/box-arrow-up-right.svg";
import location from "/map-pin.svg";
import comments from "/message.svg";
import ApplySchedule from "../ApplySchedule";
import { Btn } from "../../styles/Btn";

function SlidingPost() {
  //* 設定 redux toolkit
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootStateType) => state.sliding.slidingPostState
  );
  //* 接回指定 postId
  const postId = useSelector((state: RootStateType) => state.postId.postId);

  //* 寫入資料
  const [post, setPost] = useState({} as PostInterface);
  const [tags, setTags] = useState(String);
  const [tagAry, setTagAry] = useState([] as string[]);

  //* loading 狀態
  const [loading, setLoading] = useState(false);

  //* 接回指定 Post
  async function getPost(id: number) {
    try {
      setLoading(true); //* 設定 loading 狀態，當取得資料完成後會設定為 false
      const post: PostInterface = await axios({
        method: "GET",
        url: `${apiBase.GET_POST}/${id}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      console.log(post);
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
          <Btn
            $style="primary"
            style={{
              display: "flex",
              alignItems: "flex-end",
              textAlign: "center",

              gap: "0.5rem",
            }}
            onClick={() => {
              navigate(`/home/post/${postId}`);
              dispatch(setSlidingPostState());
            }}
          >
            查看完整貼文
            <img src={newPage} alt="Direct to full post" />
          </Btn>
        </ControlBar>

        <Container>
          <Header>
            <div>
              <div>
                <img src={post?.userAvatar} alt="Avatar" />
              </div>
            </div>

            <div>
              <div>
                <h2>{post?.userName}</h2>
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
                  <span> {post?.commentsCount} </span>
                  則留言
                </p>
              </div>
            </div>
          </Header>
          <Calendar>
            <div>
              <h6>每週可交換時段</h6>
            </div>
            <div>
              <ApplySchedule timeData={post?.availableHours} />
            </div>
          </Calendar>
          <Needs>
            <div>
              <h6>想交換的語言</h6>
            </div>
            <div>
              <div>
                <h6>想學語言</h6>
                <p>{post?.learn?.[0].Name}</p>
              </div>
              <div>
                <h6>學習動機</h6>
                <p>{post?.learn?.[0].content}</p>
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
                <p>{post.skills?.[0].language || ""}</p>
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
              <h6>證書</h6>
            </div>
            <div>
              {post?.image?.map((image, index) => (
                <Certification key={index}>
                  <img src={image} alt="no certification" />
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
