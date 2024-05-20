import { useState } from "react";
import {
  Wrapper,
  Container,
  Title,
  Tags,
  TagWrapper,
  TagButton,
  NotificationCount,
  Content,
  SortWrapper,
  Sort,
  List,
  Item,
} from "./styles";
import PageBar from "../../components/PageBar";

const avatar = "/nav-profile.png";

function Notifications() {
  const [sort, setSort] = useState("由新到舊");
  const options: string[] = ["由新到舊", "由舊到新"];

  const handleChange = (sort: string) => {
    setSort(sort);
  };
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Notifications</Title>
          <Tags>
            <li>
              <TagWrapper>
                <TagButton>全部</TagButton>
                <NotificationCount>5</NotificationCount>
              </TagWrapper>
            </li>
            <li>
              <TagWrapper>
                <TagButton>申請</TagButton>
                <NotificationCount>5</NotificationCount>
              </TagWrapper>
            </li>
            <li>
              <TagWrapper>
                <TagButton>配對</TagButton>
                <NotificationCount>5</NotificationCount>
              </TagWrapper>
            </li>
            <li>
              <TagWrapper>
                <TagButton>到期</TagButton>
                <NotificationCount>5</NotificationCount>
              </TagWrapper>
            </li>
            <li>
              <TagWrapper>
                <TagButton>中止</TagButton>
                <NotificationCount>5</NotificationCount>
              </TagWrapper>
            </li>
          </Tags>
          <Content>
            <SortWrapper>
              <p>時間排序</p>
              <Sort
                size="middle"
                languageList={options}
                currentValue={sort}
                setValue={handleChange}
              />
            </SortWrapper>
            <List>
              <li>
                <Item $isRead={true} $category={"matched"}>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span> {"Jane Doe"} </span>
                      {"已經和你配對成功了，快去看看吧"}
                      <span>{"(我是真的很想學好英文啊)"}</span>
                    </p>
                    <p>
                      <span> {"1"} </span>
                      {"分鐘前"}
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>{"申請"}</p>
                    </div>
                  </div>
                </Item>
              </li>
              <li>
                <Item $isRead={true} $category={"matched"}>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span> {"Jane Doe"} </span>
                      {"已經和你配對成功了，快去看看吧"}
                      <span>{"(我是真的很想學好英文啊)"}</span>
                    </p>
                    <p>
                      <span> {"1"} </span>
                      {"分鐘前"}
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>{"申請"}</p>
                    </div>
                  </div>
                </Item>
              </li>
              <li>
                <Item $isRead={true} $category={"matched"}>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span> {"Jane Doe"} </span>
                      {"已經和你配對成功了，快去看看吧"}
                      <span>{"(我是真的很想學好英文啊)"}</span>
                    </p>
                    <p>
                      <span> {"1"} </span>
                      {"分鐘前"}
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>{"申請"}</p>
                    </div>
                  </div>
                </Item>
              </li>
            </List>
            <PageBar />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

export default Notifications;
