import { useEffect, useState } from "react";
import {
  Chat,
  Container,
  InputGroup,
  Label,
  List,
  Message,
  User,
  Wrapper,
} from "./style";
import axios from "axios";
import apiBase from "../../Api";
import send from "/sendIcon.svg";
import { child, onValue, push } from "firebase/database";
import { dbRef } from "../../firebase/firebase";

type ChatList = {
  RoomId: number;
  InitiatorId: number;
  initiatorName: string;
  initiatorAvatar: string;
  ReceiverId: number;
  receiverName: string;
  receiverAvatar: string;
  RoomNumber: string;
}[];

interface UserData {
  name: string;
  avatar: string;
}

type MessageList = {
  name: string;
  message: string;
}[];

function TextChat() {
  const [roomId, setRoomId] = useState("");
  const [chatList, setChatList] = useState<ChatList>([]);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<MessageList>([]);
  const [remoteData, setRemote] = useState<UserData>({ name: "", avatar: "" });
  const roomref = child(dbRef, roomId || "room");

  useEffect(() => {
    console.log(roomref);
  }, [roomId]);
  //得到聊天室列表
  async function getChatList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const list: ChatList = await axios
        .get(apiBase.GET_CHATLIST, { headers })
        .then((res) => res.data.chatlist);

      setChatList(list);
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserData(roomid: number) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const data = await axios
      .get(`${apiBase.GET_CHATLIST}/${roomid}`, { headers })
      .then((res) => res.data.chatlist[0]);
    data.initiatorName === localStorage.getItem("name")
      ? setRemote({
          name: data.receiverName,
          avatar: data.receiverAvatar,
        })
      : setRemote({ name: data.initiatorName, avatar: data.initiatorAvatar });
  }

  function sendMessage() {
    const data = { name: localStorage.getItem("name"), message };
    message && push(roomref, data);
  }

  useEffect(() => {
    getChatList();
  }, []);

  useEffect(() => {
    roomId &&
      onValue(roomref, async (snap) => {
        const data = await snap.val();
        const list: MessageList = Object.values(data);
        setMessageList(list);
      });
  }, [roomId]);
  return (
    <Wrapper>
      <Container>
        <ul>
          <Label>Conversations</Label>
          {chatList.map((el, i) => (
            <List
              key={i}
              onClick={() => {
                setRoomId(el.RoomNumber);
                getUserData(el.RoomId);
              }}
            >
              <img src={el.receiverAvatar} alt="" />
              {el.receiverName}
            </List>
          ))}
        </ul>
        {roomId ? (
          <Chat>
            <User>
              <img src={remoteData.avatar} alt="" />
              <p>{remoteData.name}</p>
            </User>
            <ul>
              <ul>
                {messageList.map((el, i) => {
                  const { name, message } = el;
                  const idenity = name === localStorage.getItem("name");
                  return (
                    <Message key={i} $idenity={idenity}>
                      <img
                        src={
                          idenity
                            ? localStorage.getItem("avatar") || ""
                            : remoteData.avatar
                        }
                        alt=""
                      />
                      <p>{message}</p>
                    </Message>
                  );
                })}
              </ul>
            </ul>
            <InputGroup
              onSubmit={(e) => {
                e.preventDefault();
                console.log(message);
                sendMessage();
                setMessage("");
              }}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button>
                <img src={send} alt="" />
              </button>
            </InputGroup>
          </Chat>
        ) : (
          <Chat></Chat>
        )}
      </Container>
    </Wrapper>
  );
}

export default TextChat;
