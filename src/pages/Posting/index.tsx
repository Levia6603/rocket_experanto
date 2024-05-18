import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
  CertificationsWrapper,
} from "./styles";
import CertificationsEdit from "../../components/CertificationsEdit";
import Schedule from "../../components/Schedule";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ButtonPair from "../../components/ButtonPair";

type Formvalues = {
  subject: string;
  period: string;
  fluent: string;
  wanted: string;
  motivation: string;
  tag: string;
};

function Posting() {
  //* 選擇文章有效期間
  const defaultValue = "選擇有效期間";
  const periodList = ["一週", "二週", "三週", "一個月", "兩個月", "三個月"];
  const [period, setPeriod] = useState(defaultValue);
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Formvalues>();

  const onSubmit: SubmitHandler<Formvalues> = (data) => console.log(data);

  console.log(watch("fluent"));

  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Title>開始一個全新的學習</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Subject>
              <h6>貼文標題</h6>
              <input
                type="text"
                placeholder="請輸入貼文標題"
                {...register("subject", {
                  required: "請輸入文章標題",
                  minLength: 5,
                })}
              />
              {errors.subject && <span>請輸入文章標題</span>}
            </Subject>
            <PeriodContainer>
              <h6>有效期間</h6>
              <Period
                size="middle"
                currentValue={period}
                languageList={periodList}
                setValue={(period) => handleSelect(period)}
                {...register("period", { required: "請選擇有效期間" })}
              />
              {errors.period && <span>請選擇有效期間</span>}
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
                {...register("fluent", { required: "請選擇流利語言" })}
              />
              {errors.fluent && <span>請選擇流利語言</span>}
            </Fluent>
            <Wanted>
              <h6>想學的語言</h6>
              <WantedList
                size="middle"
                currentValue={wanted}
                languageList={wantedList}
                setValue={handleWanted}
                {...register("wanted", { required: "請選擇想學的語言" })}
              />
              {errors.period && <span>請選擇選擇語言</span>}
            </Wanted>
            <Motivation>
              <h6>學習目標</h6>
              <textarea
                placeholder="請輸入學習目標"
                {...register("motivation", {
                  required: "請輸入學習目標",
                  minLength: 10,
                })}
              />
              {errors.motivation && <span>請輸入學習目標</span>}
            </Motivation>
            <Tag>
              <h6>標籤 (最多 10 個)</h6>
              <InputTag>
                <input type="text" />
                <TagButton type="button">新增</TagButton>
              </InputTag>
              <p {...register("tag", { required: "請輸入標籤" })}></p>
            </Tag>
            <CertificationsWrapper>
              <h6>證照</h6>
              <CertificationsEdit />
            </CertificationsWrapper>
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
