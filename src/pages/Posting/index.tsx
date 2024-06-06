import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
import apiBase, { getList } from "../../Api";
import { apiList } from "../ProfileEdit";

import {
  Wrapper,
  Container,
  Form,
  Title,
  Subject,
  PeriodContainer,
  ScheduleContainer,
  Fluent,
  Wanted,
  Motivation,
  Tag,
  InputTag,
  TagButton,
  CertificationsWrapper,
  Schedule,
  BtnGroup,
} from "./styles";
import CertificationsEdit from "../../components/CertificationsEdit";
import Select from "../../components/Select";
import axios from "axios";
import plusBtn from "/plus.svg";
import deleteBtn from "/delete.svg";
import closeBtn from "/close.svg";
import { Btn } from "../../styles/Btn";
import { useNavigate } from "react-router-dom";

type Formvalues = {
  subject: string;
  period: string;
  fluent: string;
  wanted: string;
  motivation: string;
  tag: string;
};

type SkillType = { language: string; languageId: number; goal: string[] }[];

type TimeData = { start: number; end: number }[];

interface SetTimeData {
  Sun?: TimeData;
  Mon?: TimeData;
  Tue?: TimeData;
  Wed?: TimeData;
  Thu?: TimeData;
  Fri?: TimeData;
  Sat?: TimeData;
}

function Posting() {
  const navigate = useNavigate();
  //* 從 redux toolkit 中叫出資料
  const checkProfileState = useSelector(
    (state: RootStateType) => state.checkProfile.checkProfileState
  );

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  //*設定流利語言
  const [fluentList, setFluentList] = useState<apiList>([]);
  const [selectFluent, setFluent] = useState({ Id: 0, Name: "" });

  //*設定想學的語言

  const [wanted, setWanted] = useState<apiList>([]);
  const [selectedWanted, setSelectedWanted] = useState({ Id: 0, Name: "" });

  const timeList = [
    { Id: 0, Name: "0:00" },
    { Id: 1, Name: "1:00" },
    { Id: 2, Name: "2:00" },
    { Id: 3, Name: "3:00" },
    { Id: 4, Name: "4:00" },
    { Id: 5, Name: "5:00" },
    { Id: 6, Name: "6:00" },
    { Id: 7, Name: "7:00" },
    { Id: 8, Name: "8:00" },
    { Id: 9, Name: "9:00" },
    { Id: 10, Name: "10:00" },
    { Id: 11, Name: "11:00" },
    { Id: 12, Name: "12:00" },
    { Id: 13, Name: "13:00" },
    { Id: 14, Name: "14:00" },
    { Id: 15, Name: "15:00" },
    { Id: 16, Name: "16:00" },
    { Id: 17, Name: "17:00" },
    { Id: 18, Name: "18:00" },
    { Id: 19, Name: "19:00" },
    { Id: 20, Name: "20:00" },
    { Id: 21, Name: "21:00" },
    { Id: 22, Name: "22:00" },
    { Id: 23, Name: "23:00" },
    { Id: 24, Name: "24:00" },
  ];
  const deafaultTime: SetTimeData = {
    Sun: [{ start: 9, end: 12 }],
    Mon: [{ start: 9, end: 12 }],
    Tue: [{ start: 9, end: 12 }],
    Wed: [{ start: 9, end: 12 }],
    Thu: [{ start: 9, end: 12 }],
    Fri: [{ start: 9, end: 12 }],
    Sat: [{ start: 9, end: 12 }],
  };
  const [selectTimeData, setSelectTime] = useState<SetTimeData>(deafaultTime);

  const [motivation, setMotivation] = useState("");
  const [inputGoal, setInputGoal] = useState("");
  const [goalList, setGoalList] = useState<string[]>([]);

  //* 設定圖片
  const image: string[] = checkProfileState?.image ?? [];

  //* react-hook-form 設定
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formvalues>();

  const onSubmit: SubmitHandler<Formvalues> = (data) => console.log(data);

  async function getUser() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const skills: SkillType = await axios
      .get(apiBase.GET_PROFILE, { headers })
      .then((res) => res.data.skills);
    const skillList = skills.map((obj) => {
      const { language, languageId } = obj;
      return { Id: languageId, Name: language };
    });
    setFluentList(skillList);
  }

  //* 取得語言列表
  useEffect(() => {
    getList(apiBase.GET_LANGUAGE_LIST, setWanted);
    getUser();
  }, []);

  useEffect(() => {
    console.log(selectTimeData);
  }, [selectTimeData]);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>發表貼文</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Subject>
              <h6>貼文標題</h6>
              <input
                type="text"
                placeholder="請輸入貼文標題"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {errors.subject && <span>請輸入文章標題</span>}
            </Subject>
            <PeriodContainer>
              <h6>有效期間</h6>
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              {errors.period && <span>請選擇有效期間</span>}
            </PeriodContainer>
            <ScheduleContainer>
              <h5>可用時段</h5>
              <Schedule>
                <div>
                  <p>星期</p>
                  <p>起始時間</p>
                  <p>結束時間</p>
                  <p>新增/移除</p>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Mon!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Mon = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Mon?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期一</p>
                  </div>
                  <ul>
                    {selectTimeData.Mon?.length ? (
                      selectTimeData.Mon?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Mon![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Mon![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Mon?.length ? (
                      selectTimeData.Mon.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Mon = newData.Mon?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Mon?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Mon?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Tue!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Tue = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Tue?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期二</p>
                  </div>
                  <ul>
                    {selectTimeData.Tue?.length ? (
                      selectTimeData.Tue?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Tue![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Tue![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Tue?.length ? (
                      selectTimeData.Tue.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Tue = newData.Tue?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Tue?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Tue?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Wed!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Wed = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Wed?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期三</p>
                  </div>
                  <ul>
                    {selectTimeData.Wed?.length ? (
                      selectTimeData.Wed?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Wed![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Wed![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Wed?.length ? (
                      selectTimeData.Wed.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Wed = newData.Wed?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Wed?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Wed?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Thu!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Thu = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Thu?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期四</p>
                  </div>
                  <ul>
                    {selectTimeData.Thu?.length ? (
                      selectTimeData.Thu?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Thu![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Thu![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Thu?.length ? (
                      selectTimeData.Thu.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Thu = newData.Thu?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Thu?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Thu?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Fri!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Fri = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Fri?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期五</p>
                  </div>
                  <ul>
                    {selectTimeData.Fri?.length ? (
                      selectTimeData.Fri?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Fri![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Fri![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Fri?.length ? (
                      selectTimeData.Fri.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Fri = newData.Fri?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Fri?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Fri?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Sat!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Sat = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Sat?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期六</p>
                  </div>
                  <ul>
                    {selectTimeData.Sat?.length ? (
                      selectTimeData.Sat?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Sat![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Sat![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Sat?.length ? (
                      selectTimeData.Sat.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Sat = newData.Sat?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Sat?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Sat?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectTimeData.Sun!.length > 0}
                      onChange={(e) => {
                        if (!e.target.checked) {
                          const newData = { ...selectTimeData };
                          newData.Sun = [];
                          setSelectTime(newData);
                        } else {
                          const newData = { ...selectTimeData };
                          newData.Sun?.push({ start: 0, end: 0 });
                          setSelectTime(newData);
                        }
                      }}
                    />
                    <p>星期日</p>
                  </div>
                  <ul>
                    {selectTimeData.Sun?.length ? (
                      selectTimeData.Sun?.map((obj, i) => {
                        return (
                          <li key={i}>
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.start].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Sun![i].start = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                            <Select
                              width="180px"
                              list={timeList}
                              currentValue={timeList[obj.end].Name}
                              setValue={(el: { Id: number; Name: string }) => {
                                const newData = { ...selectTimeData };
                                newData.Sun![i].end = el.Id;
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>無空檔時間</li>
                    )}
                  </ul>
                  <ul>
                    {selectTimeData.Sun?.length ? (
                      selectTimeData.Sun.map((_, i) => {
                        return (
                          <li key={i}>
                            <img
                              src={deleteBtn}
                              alt="delete"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Sun = newData.Sun?.filter(
                                  (_, index) => index != i
                                );
                                setSelectTime(newData);
                              }}
                            />
                            <img
                              src={plusBtn}
                              alt="plus"
                              onClick={() => {
                                const newData = { ...selectTimeData };
                                newData.Sun?.push({
                                  start: 0,
                                  end: 0,
                                });
                                setSelectTime(newData);
                              }}
                            />
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <img
                          src={plusBtn}
                          alt="plus"
                          onClick={() => {
                            const newData = { ...selectTimeData };
                            newData.Sun?.push({ start: 0, end: 0 });
                            setSelectTime(newData);
                          }}
                        />
                      </li>
                    )}
                  </ul>
                </div>
              </Schedule>
            </ScheduleContainer>
            <Fluent>
              <h5>流利語言</h5>
              <h6>選擇語言</h6>
              <Select
                width="100%"
                list={fluentList}
                currentValue={selectFluent.Name || "請選擇語言"}
                setValue={setFluent}
              ></Select>
              {errors.fluent && <span>請選擇流利語言</span>}
            </Fluent>
            <Wanted>
              <h5>想學的語言</h5>
              <h6>選擇語言</h6>
              <Select
                width="100%"
                list={wanted}
                currentValue={selectedWanted.Name || "請選擇語言"}
                setValue={setSelectedWanted}
              />
              {errors.period && <span>請選擇選擇語言</span>}
            </Wanted>
            <Motivation>
              <h6>學習目標</h6>
              <textarea
                placeholder="請輸入學習目標"
                value={motivation}
                onChange={(e) => {
                  setMotivation(e.target.value);
                }}
              />
              {errors.motivation && <span>請輸入學習目標</span>}
            </Motivation>
            <Tag>
              <h5>
                標籤 <span>(最多 10 個)</span>
              </h5>
              <InputTag>
                <input
                  type="text"
                  value={inputGoal}
                  onChange={(e) => {
                    setInputGoal(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const list = goalList;
                      list.push(inputGoal);
                      setGoalList(list);
                      setInputGoal("");
                    }
                  }}
                />
                <TagButton type="button">新增</TagButton>
              </InputTag>
              <ul>
                {goalList.map((el, i) => (
                  <li key={i}>
                    {el}{" "}
                    <img
                      src={closeBtn}
                      alt="close"
                      onClick={() => {
                        const list = goalList.filter((_, index) => index !== i);
                        setGoalList(list);
                      }}
                    />
                  </li>
                ))}
              </ul>
              <p {...register("tag", { required: "請輸入標籤" })}></p>
            </Tag>
            <CertificationsWrapper>
              <h5>證照</h5>
              <CertificationsEdit image={image} />
            </CertificationsWrapper>
            <BtnGroup>
              <Btn $style="outline" type="button">
                取消編輯
              </Btn>
              <Btn
                $style="primary"
                type="button"
                onClick={() => {
                  const headers = {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  };
                  let timeData: SetTimeData = {};
                  Object.entries(selectTimeData)
                    .filter((arr) => arr[1].length > 0)
                    .map((arr) => {
                      const list: { start: string; end: string }[] = [];
                      arr[1].forEach((obj: { start: number; end: number }) => {
                        const { start, end } = obj;
                        for (let j = start; j < end; j++) {
                          list.push({
                            start: `${j}:00`,
                            end: `${j + 1}:00`,
                          });
                        }
                      });
                      return [arr[0], list];
                    })
                    .forEach((arr) => {
                      const [week, time] = arr;
                      timeData = { ...timeData, [week as string]: time };
                    });
                  const data = {
                    Title: title,
                    ExpirationDate: date,
                    LanguageToLearn: selectedWanted.Id,
                    PostContent: motivation,
                    GoalsId: selectFluent.Id, //擅長語言
                    Tags: goalList,
                    AvailableHours: timeData,
                    PostImages: image,
                  };

                  axios
                    .post(apiBase.POST_POST, data, { headers })
                    .then((res) => {
                      const message = res.data.message;
                      if (message === "新增成功") {
                        alert(message);
                        navigate("/home/index");
                      } else if (message === "請重新登入") {
                        alert(message);
                        navigate("/login");
                      }
                    });
                }}
              >
                發表貼文
              </Btn>
            </BtnGroup>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
}

export default Posting;
