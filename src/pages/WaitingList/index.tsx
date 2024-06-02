import { useState } from "react";
import {
  Wrapper,
  Container,
  Title,
  SortWrapper,
  Sort,
  List,
  Item,
} from "./styles";
import ButtonPair from "../../components/ButtonPair";
// import PageBar from "../../components/PageBar";
const avatar = "/nav-profile.png";

function WaitingList() {
  const [sort, setSort] = useState("由新到舊");
  const options: string[] = ["由新到舊", "由舊到新"];

  const handleChange = (sort: string) => {
    setSort(sort);
  };
  return (
    <>
      <Wrapper title="我是Wrapper">
        <Container title="我是Container">
          <Title>等待對方回應中</Title>
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
            <Item>
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <h5>{"我是真的很想學好英文"}</h5>
                <p>
                  申請日期: <span>{"2022/01/01"}</span>
                </p>
                <p>
                  貼文有效期限: <span>{"2022/01/01"}</span> -{" "}
                  <span>{"2022/01/01"}</span>
                </p>
              </div>
              <div>
                <ButtonPair
                  left="詳細內容"
                  right="取消申請"
                  backgroundColorRight="black"
                  backgroundColorLeft="transparent"
                />
              </div>
            </Item>
            <Item>
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <h5>{"我是真的很想學好英文"}</h5>
                <p>
                  申請日期: <span>{"2022/01/01"}</span>
                </p>
                <p>
                  貼文有效期限: <span>{"2022/01/01"}</span> -{" "}
                  <span>{"2022/01/01"}</span>
                </p>
              </div>
              <div>
                <ButtonPair
                  left="詳細內容"
                  right="取消申請"
                  backgroundColorRight="black"
                  backgroundColorLeft="transparent"
                />
              </div>
            </Item>
            <Item>
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <h5>{"我是真的很想學好英文"}</h5>
                <p>
                  申請日期: <span>{"2022/01/01"}</span>
                </p>
                <p>
                  貼文有效期限: <span>{"2022/01/01"}</span> -{" "}
                  <span>{"2022/01/01"}</span>
                </p>
              </div>
              <div>
                <ButtonPair
                  left="詳細內容"
                  right="取消申請"
                  backgroundColorRight="black"
                  backgroundColorLeft="transparent"
                />
              </div>
            </Item>
            <Item>
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <h5>{"我是真的很想學好英文"}</h5>
                <p>
                  申請日期: <span>{"2022/01/01"}</span>
                </p>
                <p>
                  貼文有效期限: <span>{"2022/01/01"}</span> -{" "}
                  <span>{"2022/01/01"}</span>
                </p>
              </div>
              <div>
                <ButtonPair
                  left="詳細內容"
                  right="取消申請"
                  backgroundColorRight="black"
                  backgroundColorLeft="transparent"
                />
              </div>
            </Item>
          </List>
          {/* <PageBar /> */}
        </Container>
      </Wrapper>
    </>
  );
}
export default WaitingList;
