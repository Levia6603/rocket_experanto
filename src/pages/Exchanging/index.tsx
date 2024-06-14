import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import apiBase from "../../Api";
import {
  BtnGroup,
  CardAlbum,
  Container,
  CurrentCard,
  RemoteCard,
  Title,
  Wrapper,
} from "./styles";
import { Btn } from "../../styles/Btn";
import chatIcon from "/chat.svg";
import videoIcon from "/camera-video.svg";
import checkedIcon from "/check-circle-fill.svg";

interface ExchangeData {
  exchangeId: number;
  tittle: string;
  duration: string;
}

interface CurrentUserData {
  id: number;
  name: string;
  avatar: string;
  plan: string[];
  status: boolean;
}
interface RemoteUserData {
  id: number;
  name: string;
  avatar: string;
  plan: {
    goalId: number;
    status: boolean;
    content: string;
  }[];
  status: boolean;
}

function Exchanging() {
  const { id } = useParams();
  const [exchangeData, setExchangeData] = useState<ExchangeData>();
  const [currentData, setCurrentData] = useState<CurrentUserData>();
  const [remoteData, setRemoteData] = useState<RemoteUserData>();
  const navigate = useNavigate();

  async function getList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const data = await axios
      .get(`${apiBase.GET_CHANGE_DATA}/${id}`, { headers })
      .then((res) => res.data.list[0]);

    const exData: ExchangeData = {
      exchangeId: data.exchangeId,
      duration: data.duration,
      tittle: data.tittle,
    };
    setExchangeData(exData);

    if (data.initiatorName === localStorage.getItem("name")) {
      setCurrentData({
        id: data.initiatorId,
        name: data.initiatorName,
        avatar: data.initiatorAvatar,
        plan: data.initiatorPlan[0].plan,
        status: data.initiatorTeachIsCompleted,
      });
      setRemoteData({
        id: data.receiverId,
        name: data.receiverName,
        avatar: data.receiverAvatar,
        plan: data.receiverToteach[0].plan,
        status: data.receiverTeachIsCompleted,
      });
    } else {
      setCurrentData({
        id: data.receiverId,
        name: data.receiverName,
        avatar: data.receiverAvatar,
        plan: data.receiverPlan[0].plan,
        status: data.receiverTeachIsCompleted,
      });
      setRemoteData({
        id: data.initiatorId,
        name: data.initiatorName,
        avatar: data.initiatorAvatar,
        plan: data.initiatorToteach[0].plan,
        status: data.initiatorTeachIsCompleted,
      });
    }
  }

  async function createRoom(type: string) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const roomId = uuidv4().substring(0, 8);
    const data = { ExchangeId: id, RoomNumberGuid: roomId };
    const res = await axios
      .post(apiBase.POST_CHATROOM, data, { headers })
      .then((res) => {
        if (res.data.Message === "請重新登入") {
          alert("登入逾時，請重新登入");
          navigate("/login");
        } else {
          return res.data.RoomNumber;
        }
      })
      .catch((err) => err.response.data.RoomNumber);
    window.open(`http://localhost:5173/${type}?roomid=${res}`, "_blank");
  }

  async function accomplishSingleGoal(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      await axios({
        method: "POST",
        url: `${apiBase.POST_ACCOMPLISH_SINGLE_GOAL}/${id}`,
        headers: headers,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  async function accomplishAllGoal(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      await axios({
        method: "POST",
        url: `${apiBase.POST_ACCOMPLISH_ALL_GOALS}/${id}`,
        headers: headers,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  function handleAccomplish(id: number) {
    accomplishSingleGoal(id);
    getList();
  }

  function handleAccomplishAll(id: number) {
    accomplishAllGoal(id);
    getList();
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <h2>開始交換</h2>
          <div>
            <Title>
              <div>
                <h3>{exchangeData?.tittle}</h3>
                <p>Duration: {exchangeData?.duration}</p>
              </div>
              <div>
                <Btn
                  $style="primary"
                  type="button"
                  onClick={() => {
                    createRoom("message");
                  }}
                >
                  <img src={chatIcon} alt="chatIcon" />
                  私訊交談
                </Btn>
                <Btn
                  $style="primary"
                  type="button"
                  onClick={() => {
                    createRoom("videocall");
                  }}
                >
                  <img src={videoIcon} alt="videoIcon" />
                  視訊教學
                </Btn>
              </div>
            </Title>
            <CardAlbum>
              <RemoteCard checked={remoteData?.status}>
                <div>
                  <img src={remoteData?.avatar} alt="remote avatar" />
                  <p>{remoteData?.name}</p>
                </div>
                <ul>
                  {remoteData?.plan.map((obj, i) => (
                    <li key={i}>
                      <label>
                        <input
                          type="checkbox"
                          checked={obj.status}
                          onChange={() => handleAccomplish(obj.goalId)}
                          disabled={remoteData?.status}
                        />
                        {obj.content}
                      </label>
                    </li>
                  ))}
                </ul>
                <div>
                  <div>
                    <img src={checkedIcon} alt="" />
                  </div>
                  <p>{"已確認完成"}</p>
                </div>
              </RemoteCard>
              <CurrentCard checked={currentData?.status}>
                <div>
                  <img src={currentData?.avatar} alt="current avatar" />
                  <p>{currentData?.name}</p>
                </div>
                <ul>
                  {currentData?.plan.map((el, i) => (
                    <li key={i}>
                      {i + 1}. {el}
                    </li>
                  ))}
                </ul>
                <div>
                  <div>
                    <img src={checkedIcon} alt="" />
                  </div>
                  <p>{"已確認完成"}</p>
                </div>
              </CurrentCard>
            </CardAlbum>
            <BtnGroup>
              <button>終止交換</button>
              {currentData?.status === true || remoteData?.status === true ? (
                <Btn
                  $style="primary"
                  onClick={() =>
                    navigate(`/user/commenting/${exchangeData?.exchangeId}`)
                  }
                >
                  前往評價
                </Btn>
              ) : remoteData?.plan.every((item) => item.status) ? (
                <Btn
                  $style="primary"
                  onClick={() =>
                    exchangeData?.exchangeId &&
                    handleAccomplishAll(exchangeData.exchangeId)
                  }
                >
                  完成交換
                </Btn>
              ) : (
                <Btn $style="disable">完成交換</Btn>
              )}
            </BtnGroup>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

export default Exchanging;
