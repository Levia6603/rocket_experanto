import { useState } from "react";
import {
  Wrapper,
  Container,
  Title,
  Cards,
  CardWrapper,
  Card,
  ShowDetailsButton,
  Candidates,
  Candidate,
} from "./styles";
import { SortWrapper, Sort } from "../Notifications/styles";
import pserson from "../../../public/profile_box_icons/person.svg";
import dropdownIcon from "/chevron-down.png";
import avatar from "/avatar-80.svg";

function Matching() {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>等待交換確認</Title>
          <SortWrapper>
            <p>時間排序</p>
            <Sort
              size="middle"
              languageList={["由新到舊", "由舊到新"]}
              currentValue={"由新到舊"}
              setValue={() => {}}
            />
          </SortWrapper>
          <Cards>
            <CardWrapper $isOpen={showDetails}>
              <Card $isOpen={showDetails}>
                <div title="內容區">
                  <div>
                    <h5>{"我是真的很想學好英文啊"}</h5>
                  </div>
                  <div title="留言人數和申請時間">
                    <div>
                      <div>
                        <img src={pserson} alt="" />
                      </div>
                      <p>
                        <span>{"5"}</span>人
                      </p>
                    </div>
                    <div>
                      <p>
                        最新申請日期：<span>{"2022/01/01"}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div title="按鈕區">
                  <ShowDetailsButton
                    $isOpen={showDetails}
                    onClick={handleShowDetails}
                  >
                    {showDetails ? "展開" : "收起"}
                    <img src={dropdownIcon} alt="" />
                  </ShowDetailsButton>
                </div>
              </Card>
              <Candidates $isOpen={!showDetails}>
                <Candidate title="候選人">
                  <div>
                    <div>
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <p>John Doe</p>
                    <p>
                      提出申請時間<span>{"2022/01/01"}</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>
                        擅長語言：<span>{"中文"}</span>
                      </p>
                      <p>
                        想學語言：<span>{"英文"}</span>
                      </p>
                    </div>
                    <div>
                      <p>學習動機</p>
                      <p>
                        {
                          "我有強烈的學習英語的慾望。 英語是全球公認的語言，可以為我開啟更廣闊的世界。 我相信掌握英語可以提升我的溝通技巧，擴大職業機會，甚至更深入了解西方文化。"
                        }
                      </p>
                    </div>
                  </div>
                </Candidate>
                <Candidate title="候選人">
                  <div>
                    <div>
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <p>John Doe</p>
                    <p>
                      提出申請時間<span>{"2022/01/01"}</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>
                        擅長語言：<span>{"中文"}</span>
                      </p>
                      <p>
                        想學語言：<span>{"英文"}</span>
                      </p>
                    </div>
                    <div>
                      <p>學習動機</p>
                      <p>
                        {
                          "我有強烈的學習英語的慾望。 英語是全球公認的語言，可以為我開啟更廣闊的世界。 我相信掌握英語可以提升我的溝通技巧，擴大職業機會，甚至更深入了解西方文化。"
                        }
                      </p>
                    </div>
                  </div>
                </Candidate>
                <Candidate title="候選人">
                  <div>
                    <div>
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <p>John Doe</p>
                    <p>
                      提出申請時間<span>{"2022/01/01"}</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>
                        擅長語言：<span>{"中文"}</span>
                      </p>
                      <p>
                        想學語言：<span>{"英文"}</span>
                      </p>
                    </div>
                    <div>
                      <p>學習動機</p>
                      <p>
                        {
                          "我有強烈的學習英語的慾望。 英語是全球公認的語言，可以為我開啟更廣闊的世界。 我相信掌握英語可以提升我的溝通技巧，擴大職業機會，甚至更深入了解西方文化。"
                        }
                      </p>
                    </div>
                  </div>
                </Candidate>
                <Candidate title="候選人">
                  <div>
                    <div>
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <p>John Doe</p>
                    <p>
                      提出申請時間<span>{"2022/01/01"}</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>
                        擅長語言：<span>{"中文"}</span>
                      </p>
                      <p>
                        想學語言：<span>{"英文"}</span>
                      </p>
                    </div>
                    <div>
                      <p>學習動機</p>
                      <p>
                        {
                          "我有強烈的學習英語的慾望。 英語是全球公認的語言，可以為我開啟更廣闊的世界。 我相信掌握英語可以提升我的溝通技巧，擴大職業機會，甚至更深入了解西方文化。"
                        }
                      </p>
                    </div>
                  </div>
                </Candidate>
                <Candidate title="候選人">
                  <div>
                    <div>
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <p>John Doe</p>
                    <p>
                      提出申請時間<span>{"2022/01/01"}</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>
                        擅長語言：<span>{"中文"}</span>
                      </p>
                      <p>
                        想學語言：<span>{"英文"}</span>
                      </p>
                    </div>
                    <div>
                      <p>學習動機</p>
                      <p>
                        {
                          "我有強烈的學習英語的慾望。 英語是全球公認的語言，可以為我開啟更廣闊的世界。 我相信掌握英語可以提升我的溝通技巧，擴大職業機會，甚至更深入了解西方文化。"
                        }
                      </p>
                    </div>
                  </div>
                </Candidate>
              </Candidates>
            </CardWrapper>
          </Cards>
        </Container>
      </Wrapper>
    </>
  );
}

export default Matching;
