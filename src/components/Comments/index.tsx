import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
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
  const [comments, setComments] = useState<Comments>({} as Comments);

  function getComments(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      axios({
        method: "GET",
        url: `${apiBase.GET_COMMENT_LIST}/${id}`,
        headers: headers,
      })
        .then((res) => {
          setComments(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }
  const postId = useSelector((state: RootStateType) => state.postId.postId);

  useEffect(() => {
    getComments(postId);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>留言版</Title>
          <div>
            {comments &&
              comments.comments.map((comment) => {
                return (
                  <Comment>
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
              <Btn $style="outline">送出留言</Btn>
            </WriteMessage>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
export default Comments;
