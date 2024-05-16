import { useState } from "react";
import {
  Wrapper,
  Container,
  Form,
  Title,
  Subject,
  Period,
  PeriodContainer,
  ScheduleContainer,
  Fluent,
  FluentList,
  Wanted,
  WantedList,
  Motivation,
  Tag,
  InputTag,
  TagButton,
  Certification,
  CertificationCard,
  DeleteButton,
} from "./styles";
import Schedule from "../../components/Schedule";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ButtonPair from "../../components/ButtonPair";

import noCertification from "/no-certification-sm.svg";
import deleteImg from "/close-lg.svg";

function Posting() {
  //* 選擇文章有效期間
  const defaultValue = "選擇有效期間";
  const periodList = ["一週", "二週", "三週", "一個月", "兩個月", "三個月"];
  const [peoriod, setPeriod] = useState(defaultValue);
  function handleSelect(el: string) {
    setPeriod(el);
  }

  //*設定流利語言
  const defaultFluent = "請選擇流利語言";
  const fluentList = [
    "中文",
    "英文",
    "日文",
    "韓文",
    "泰文",
    "越南文",
    "印尼文",
  ];
  const [fluent, setFluent] = useState(defaultFluent);
  function handleFluent(el: string) {
    setFluent(el);
  }

  //*設定想學的語言
  const defaultWanted = "請選擇想學的語言";
  const wantedList = [
    "中文",
    "英文",
    "日文",
    "韓文",
    "泰文",
    "越南文",
    "印尼文",
  ];
  const [wanted, setWanted] = useState(defaultWanted);
  function handleWanted(el: string) {
    setWanted(el);
  }

  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Title>開始一個全新的學習</Title>
          <Form>
            <Subject>
              <h6>貼文標題</h6>
              <input type="text" />
            </Subject>
            <PeriodContainer>
              <h6>有效期間</h6>
              <Period
                size="middle"
                currentValue={peoriod}
                languageList={periodList}
                setValue={handleSelect}
              />
            </PeriodContainer>
            <ScheduleContainer>
              <h6>可用時段</h6>
              <Schedule />
            </ScheduleContainer>
            <Fluent>
              <h6>流利語言</h6>
              <FluentList
                size="middle"
                currentValue={fluent}
                languageList={fluentList}
                setValue={handleFluent}
              />
            </Fluent>
            <Wanted>
              <h6>想學的語言</h6>
              <WantedList
                size="middle"
                currentValue={wanted}
                languageList={wantedList}
                setValue={handleWanted}
              />
            </Wanted>
            <Motivation>
              <h6>學習目標</h6>
              <textarea />
            </Motivation>
            <Tag>
              <h6>標籤 (最多 10 個)</h6>
              <InputTag>
                <input type="text" />
                <TagButton type="button">新增</TagButton>
              </InputTag>
              <p></p>
            </Tag>
            <Certification>
              <h6>證照</h6>
              <ul>
                <li>
                  <CertificationCard>
                    <DeleteButton type="button">
                      <img src={deleteImg} alt="" />
                    </DeleteButton>
                    <img src={noCertification} alt="noCertification" />
                  </CertificationCard>
                </li>
              </ul>
            </Certification>
            <ButtonPair
              right="發布"
              left="取消"
              backgroundColorRight=""
              backgroundColorLeft=""
            />
          </Form>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Posting;
