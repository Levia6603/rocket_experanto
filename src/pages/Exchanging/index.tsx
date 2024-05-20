import { useState } from "react";
import {
  Wrapper,
  Container,
  Title,
  Content,
  Header,
  Body,
  Footer,
  Card,
  DeterminationButton,
  CompleteButton,
  ReviewButton,
} from "./styles";
import ButtonPair from "../../components/ButtonPair";

function Exchanging() {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const toggle = () => {
    setIsCompleted((isCompleted) => (isCompleted = !isCompleted));
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>交換中...</Title>
          <Content>
            <Header>
              <div>
                <h5>我是真的很想學好英文</h5>
                <p>
                  有效期間：
                  <span>
                    {"2024/05/20"} - <span>{"2024/06/20"}</span>
                  </span>
                </p>
              </div>
              <div>
                <ButtonPair
                  left="開啟視訊"
                  right="開啟對話"
                  backgroundColorLeft=""
                  backgroundColorRight=""
                ></ButtonPair>
              </div>
            </Header>
            <Body>
              <Card>
                <div>
                  <div>
                    <img src="/avatar-80.svg" alt="大頭站" />
                  </div>
                  <h6>Ella Dowson</h6>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <p>
                      {
                        "奠定基礎：學生將學習基本的英語文法、詞彙和常見句子結構。"
                      }
                    </p>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <p>
                      {
                        "增強口語表達：透過角色扮演、小組討論和其他活動，學生將獲得用英語進行口語交流的信心。"
                      }
                    </p>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <p>
                      {
                        "提升聽力技能：透過聽力練習，學生將加深對英語聽力的理解並提高他們的反應速度。"
                      }
                    </p>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <p>
                      {
                        "書面表達技巧：學生將學習基本的寫作技巧，包括句子結構、段落組織和常用表達。"
                      }
                    </p>
                  </label>
                </div>
              </Card>

              <Card>
                <div>
                  <div>
                    <img src="/avatar-80.svg" alt="大頭站" />
                  </div>
                  <h6>Ella Dowson</h6>
                </div>
                <div>
                  <label>
                    <p>{"1"}</p>

                    <p>
                      {
                        "奠定基礎：學生將學習基本的英語文法、詞彙和常見句子結構。"
                      }
                    </p>
                  </label>
                  <label>
                    <p>{"2"}</p>

                    <p>
                      {
                        "增強口語表達：透過角色扮演、小組討論和其他活動，學生將獲得用英語進行口語交流的信心。"
                      }
                    </p>
                  </label>
                  <label>
                    <p>{"3"}</p>
                    <p>
                      {
                        "提升聽力技能：透過聽力練習，學生將加深對英語聽力的理解並提高他們的反應速度。"
                      }
                    </p>
                  </label>
                  <label>
                    <p>{"4"}</p>
                    <p>
                      {
                        "書面表達技巧：學生將學習基本的寫作技巧，包括句子結構、段落組織和常用表達。"
                      }
                    </p>
                  </label>
                </div>
              </Card>
            </Body>
            <Footer>
              <DeterminationButton>終止交換</DeterminationButton>
              <div>
                {(isCompleted && (
                  <ReviewButton onClick={toggle}>前往評價</ReviewButton>
                )) || (
                  <CompleteButton onClick={toggle}>完成交換</CompleteButton>
                )}
              </div>
            </Footer>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

export default Exchanging;
