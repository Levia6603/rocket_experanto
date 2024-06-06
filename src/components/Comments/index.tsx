import { Wrapper, Container, Title, Comment, WriteMessage } from "./styles";
import three_dots_vertical from "/three-dots-vertical.svg";
import { Btn } from "../../styles/Btn";

function Comments() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>留言版</Title>
          <div>
            <Comment>
              <div>
                <div>
                  <img src="/avatar-80.svg" alt="" />
                </div>
                <p>2024 / 05 / 14</p>
              </div>
              <div>
                <div>
                  <h5>Jane Doe</h5>
                  <div>
                    <img src={three_dots_vertical} alt="" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  illo at, non tempora eum unde sed accusamus deleniti fugit est
                  asperiores dicta ad. Earum quisquam porro quae nostrum debitis
                  neque?
                </p>
              </div>
            </Comment>
            <Comment>
              <div>
                <div>
                  <img src="/avatar-80.svg" alt="" />
                </div>
                <p>2024 / 05 / 14</p>
              </div>
              <div>
                <div>
                  <h5>Jane Doe</h5>
                  <div>
                    <img src={three_dots_vertical} alt="" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  illo at, non tempora eum unde sed accusamus deleniti fugit est
                  asperiores dicta ad. Earum quisquam porro quae nostrum debitis
                  neque? Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Explicabo illum itaque corrupti rerum et veritatis.
                  Eveniet accusamus vel reiciendis tempora tempore iure, esse
                  ex. Dolore nulla magni officia commodi rem.
                </p>
              </div>
            </Comment>
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
