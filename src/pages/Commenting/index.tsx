import {
  Wrapper,
  Container,
  Title,
  Header,
  Course,
  Review,
  ReviewItem,
  TextAreaWrapper,
} from "./styles";
import star from "/profile_box_icons/star-yellow.svg";
import starOutline from "/profile_box_icons/star.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";
import { useEffect, useState } from "react";
import { Btn } from "../../styles/Btn";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import {
  setToastText,
  toggleToast,
} from "../../../redux/toastState/toastStateSlice";

interface RemoteData {
  name: string;
  avatar: string;
  plan: { goalId: number; status: boolean; content: string }[];
}
interface ExchangeData {
  title: string;
  duration: string;
  id: number;
}
interface RatingData {
  PlanningScore: number;
  TeachingScore: number;
  OverallScore: number;
  Comment: string;
}

function Commenting() {
  const defaultRate: RatingData = {
    PlanningScore: 0,
    TeachingScore: 0,
    OverallScore: 0,
    Comment: "",
  };
  const { id } = useParams();
  const [remoteData, setRemoteData] = useState<RemoteData>({
    name: "",
    avatar: "",
    plan: [],
  });
  const [exchangeData, setExchangeData] = useState<ExchangeData>({
    title: "",
    duration: "",
    id: 0,
  });
  const [rate, setRate] = useState<RatingData>(defaultRate);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function getData() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const data = await axios
      .get(`${apiBase.GET_CHANGE_DATA}/${id}`, { headers })
      .then((res) => {
        if (res.data.Message === "請重新登入") {
          alert("登入逾時，請重新登入");
          navigate("/login");
          return;
        }
        return res.data[0];
      });

    setExchangeData({
      title: data.tittle,
      duration: data.duration,
      id: data.exchangeId,
    });

    if (data.initiatorName === localStorage.getItem("name")) {
      setRemoteData({
        name: data.receiverName,
        avatar: data.receiverAvatar,
        plan: data.receiverToteach[0].plan,
      });
    } else {
      setRemoteData({
        name: data.initiatorName,
        avatar: data.initiatorAvatar,
        plan: data.initiatorToteach[0].plan,
      });
    }
  }

  async function Submit() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    dispatch(setLoading(true));
    const data = { ...rate, ExchangeId: id };
    await axios
      .post(`${apiBase.POST_RATING}`, data, { headers })
      .then((res) => {
        dispatch(setLoading(false));
        if (res.data.message === "新增成功") {
          navigate("/home/index");
          dispatch(toggleToast());
          dispatch(setToastText("新增評價成功"));
        }
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>填寫評價</Title>
          <div>
            <Header>
              <h5>{exchangeData.title}</h5>
              <p>
                完成日期: <span>{exchangeData.duration}</span>
              </p>
            </Header>
            <Course>
              <div>
                <img src={remoteData.avatar} alt="avatar" />
                <p>{remoteData.name}</p>
              </div>
              <ul>
                <li>教學規劃:</li>
                {remoteData.plan.map((obj, i) => {
                  const { goalId, content } = obj;
                  return (
                    <li key={goalId}>
                      {i + 1} . {content}
                    </li>
                  );
                })}
              </ul>
            </Course>
          </div>
          <div>
            <h5>評價內容</h5>
            <Review>
              <ReviewItem>
                <p>
                  <span>1. </span> 您認為對方的教學規劃對您的幫助如何：
                </p>
                <ul>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, PlanningScore: 1 };
                      });
                    }}
                  >
                    <img
                      src={rate.PlanningScore > 0 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, PlanningScore: 2 };
                      });
                    }}
                  >
                    <img
                      src={rate.PlanningScore > 1 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, PlanningScore: 3 };
                      });
                    }}
                  >
                    <img
                      src={rate.PlanningScore > 2 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, PlanningScore: 4 };
                      });
                    }}
                  >
                    <img
                      src={rate.PlanningScore > 3 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, PlanningScore: 5 };
                      });
                    }}
                  >
                    <img
                      src={rate.PlanningScore > 4 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                </ul>
              </ReviewItem>
              <ReviewItem>
                <p>
                  <span>2. </span> 您認為對方的教學方式對您的幫助如何：
                </p>
                <ul>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, TeachingScore: 1 };
                      });
                    }}
                  >
                    <img
                      src={rate.TeachingScore > 0 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, TeachingScore: 2 };
                      });
                    }}
                  >
                    <img
                      src={rate.TeachingScore > 1 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, TeachingScore: 3 };
                      });
                    }}
                  >
                    <img
                      src={rate.TeachingScore > 2 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, TeachingScore: 4 };
                      });
                    }}
                  >
                    <img
                      src={rate.TeachingScore > 3 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, TeachingScore: 5 };
                      });
                    }}
                  >
                    <img
                      src={rate.TeachingScore > 4 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                </ul>
              </ReviewItem>
              <ReviewItem>
                <p>
                  <span>3. </span> 您認為這次的交換整體感受如何：
                </p>
                <ul>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, OverallScore: 1 };
                      });
                    }}
                  >
                    <img
                      src={rate.OverallScore > 0 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, OverallScore: 2 };
                      });
                    }}
                  >
                    <img
                      src={rate.OverallScore > 1 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, OverallScore: 3 };
                      });
                    }}
                  >
                    <img
                      src={rate.OverallScore > 2 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, OverallScore: 4 };
                      });
                    }}
                  >
                    <img
                      src={rate.OverallScore > 3 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                  <li
                    onClick={() => {
                      setRate((prev) => {
                        return { ...prev, OverallScore: 5 };
                      });
                    }}
                  >
                    <img
                      src={rate.OverallScore > 4 ? star : starOutline}
                      alt="star"
                    />
                  </li>
                </ul>
              </ReviewItem>
              <TextAreaWrapper>
                <p>您的評價內容</p>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="請留下您的評論⋯⋯"
                  value={rate.Comment}
                  onChange={(e) => {
                    setRate((prev) => {
                      return { ...prev, Comment: e.target.value };
                    });
                  }}
                ></textarea>
                <Btn $style="primary" type="button" onClick={Submit}>
                  送出評價
                </Btn>
              </TextAreaWrapper>
            </Review>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

export default Commenting;
