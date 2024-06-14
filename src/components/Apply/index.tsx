import {
  Wrapper,
  Container,
  CloseButton,
  Header,
  Info,
  ScheduleWrapper,
  CertificationWrapper,
  Schedule,
  Label,
  TimeBtn,
  Submit,
} from "./styles";
import Certification from "../CertificationsEdit";
import close from "/close-lg.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import apiBase from "../../Api";
import { Btn } from "../../styles/Btn";
import { useParams } from "react-router-dom";

type timeData = { start: string; end: string; select: boolean }[];

interface Props {
  selectTime: {
    Sun?: timeData;
    Mon?: timeData;
    Tue?: timeData;
    Wed?: timeData;
    Thu?: timeData;
    Fri?: timeData;
    Sat?: timeData;
  };
  setSelectTime: any;
  setApplyState: any;
  exchangeLanguage: { post: string; apply: string };
}

interface Data {
  Sun?: { start: string; end: string }[];
  Mon?: { start: string; end: string }[];
  Tue?: { start: string; end: string }[];
  Wed?: { start: string; end: string }[];
  Thu?: { start: string; end: string }[];
  Fri?: { start: string; end: string }[];
  Sat?: { start: string; end: string }[];
}

interface ApplyData {
  PostId: number;
  LearnMotivation: string;
  SelectedTimes: Data;
}

function Apply({
  exchangeLanguage,
  selectTime,
  setSelectTime,
  setApplyState,
}: Props) {
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");
  const [certification, setCertification] = useState<string[]>([]);
  const [learnMotivation, setLearnMotivation] = useState("");

  const { id } = useParams();

  async function getUserData() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const data = await axios
      .get(apiBase.GET_PROFILE, { headers })
      .then((res) => res.data.image);
    setCertification(data);
  }

  async function sendApply(data: ApplyData) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const message = await axios
      .post(apiBase.POST_SEND_APPLY, data, {
        headers,
      })
      .then((res) => res.data.message);
    if (message === "新增成功") {
      alert("成功送出申請！");
      setApplyState(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <CloseButton
            onClick={() => {
              setApplyState(false);
            }}
          >
            <img src={close} alt="close" />
          </CloseButton>
        </div>
        <Header>
          <div>
            <img src={avatar || ""} alt="avatar" />
          </div>
          <h6>{name}</h6>
        </Header>
        <Info>
          <div>
            <h6>擅長語言</h6>
            <input type="text" disabled value={exchangeLanguage.post} />
          </div>
          <div>
            <h6>想學語言</h6>
            <input type="text" disabled value={exchangeLanguage.apply} />
          </div>
          <div>
            <h6>學習動機</h6>
            <textarea
              value={learnMotivation}
              onChange={(e) => {
                setLearnMotivation(e.target.value);
              }}
            />
          </div>
        </Info>
        <ScheduleWrapper>
          <h6>請選擇可以交換的時間</h6>
          <Schedule>
            <ul>
              <Label>日</Label>
              {(selectTime?.Sun || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let sunday = selectTime.Sun;
                      sunday![i].select = !select;
                      const newSelectTime = { ...selectTime, Sun: sunday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>一</Label>
              {(selectTime?.Mon || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let monday = selectTime.Mon;
                      monday![i].select = !select;
                      const newSelectTime = { ...selectTime, Mon: monday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>二</Label>
              {(selectTime?.Tue || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let tuesday = selectTime.Tue;
                      tuesday![i].select = !select;
                      const newSelectTime = { ...selectTime, Tue: tuesday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>三</Label>
              {(selectTime?.Wed || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let wednesday = selectTime.Wed;
                      wednesday![i].select = !select;
                      const newSelectTime = { ...selectTime, Wed: wednesday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>四</Label>
              {(selectTime?.Thu || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let thursday = selectTime.Thu;
                      thursday![i].select = !select;
                      const newSelectTime = { ...selectTime, Thu: thursday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>五</Label>
              {(selectTime?.Fri || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let friday = selectTime.Fri;
                      friday![i].select = !select;
                      const newSelectTime = { ...selectTime, Fri: friday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
            <ul>
              <Label>六</Label>
              {(selectTime?.Sat || []).map((el, i) => {
                const { start, end, select } = el;
                return (
                  <TimeBtn
                    key={i}
                    $select={select}
                    onClick={() => {
                      let saturday = selectTime.Sat;
                      saturday![i].select = !select;
                      const newSelectTime = { ...selectTime, Sat: saturday };
                      setSelectTime(newSelectTime);
                    }}
                  >
                    {start}-{end}
                  </TimeBtn>
                );
              })}
            </ul>
          </Schedule>
        </ScheduleWrapper>
        <CertificationWrapper>
          <h6>語言證書檔案</h6>
          <Certification image={certification} />
        </CertificationWrapper>
        <Submit>
          <Btn
            $style="outline"
            type="button"
            onClick={() => {
              setApplyState(false);
            }}
          >
            取消申請
          </Btn>
          <Btn
            $style="primary"
            type="button"
            onClick={() => {
              let select: Data = {};
              Object.entries(selectTime).forEach((arr) => {
                const [week, time] = arr;
                const selected = time
                  .filter((obj) => obj.select)
                  .map((obj) => {
                    const { start, end } = obj;
                    return { start, end };
                  });
                if (selected.length) {
                  select = { ...select, [week]: selected };
                }
              });
              const data = {
                PostId: Number(id),
                LearnMotivation: learnMotivation,
                SelectedTimes: select,
                ExchangeImages: certification,
              };
              sendApply(data);
            }}
          >
            送出申請
          </Btn>
        </Submit>
      </Container>
    </Wrapper>
  );
}

export default Apply;
