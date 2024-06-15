import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";
import { Wrapper, Container, Title, Comment, WriteMessage } from "./styles";
import three_dots_vertical from "/three-dots-vertical.svg";
import { Btn } from "../../styles/Btn";

type Comment = {
  content: string;
  createdAt: string;
  userAvatar: string;
  userId: number;
  userName: string;
};

type Comments = {
  Status: string;
  Code: number;
  message: string;
  comments: Comment[];
};

function Comments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comments>({} as Comments);
  const { id } = useParams();
  const postIdNum = Number(id);
  const token = localStorage.getItem("token");

  function getComments(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      axios({
        method: "GET",
        url: `${apiBase.GET_COMMENT_LIST}/${id}`,
        headers: headers,
      })
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  function postComment(id: number, comment: string) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = { PostComment: comment, PostId: id };
    try {
      axios({
        method: "POST",
        url: `${apiBase.POST_COMMENT}`,
        headers: headers,
        data: data,
      })
        .then(() => {
          getComments(id);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  const handleComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    const textarea = e.currentTarget
      .previousElementSibling as HTMLTextAreaElement;

    function isLoggedIn(): void {
      alert("請先登入");
      navigate("/login");
      return;
    }
    function isTextareaEmpty(): void {
      textarea.value
        ? postComment(postIdNum, textarea.value)
        : alert("請輸入內容");
      textarea.value = "";
    }
    !token ? isLoggedIn() : isTextareaEmpty();
  };

  useEffect(() => {
    getComments(postIdNum);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>留言版</Title>
          <div>
            {comments &&
              comments.comments &&
              comments.comments.map((comment, index) => {
                return (
                  <Comment key={index}>
                    <div>
                      <div>
                        <img src={comment.userAvatar} alt="" />
                      </div>
                      <p>{comment.createdAt}</p>
                    </div>
                    <div>
                      <div>
                        <h5>{comment.userName}</h5>
                        <div>
                          <img src={three_dots_vertical} alt="" />
                        </div>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  </Comment>
                );
              })}
          </div>
          <div>
            <WriteMessage>
              <h6>撰寫留言</h6>
              <textarea
                name="comment"
                id="comment"
                placeholder="請注意網路禮節，禁止人身攻擊..."
              ></textarea>
              <Btn $style="outline" onClick={handleComment}>
                送出留言
              </Btn>
            </WriteMessage>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
export default Comments;
