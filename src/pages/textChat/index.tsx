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
    const url = new URLSearchParams(window.location.search);
    const id = url.get("roomid");
    id && setRoomId(id);
    getChatList();
  }, []);

  useEffect(() => {
    roomId &&
      onValue(roomref, async (snap) => {
        const data = await snap.val();
        if (data) {
          const list: MessageList = Object.values(data);
          setMessageList(list);
        }
      });
  }, [roomId]);

  useEffect(() => {
    console.log(chatList);
    console.log(messageList);
  }, [chatList, messageList]);
  return (
    <Wrapper>
      <Container>
        <ul>
          <Label>Conversations</Label>
          {chatList &&
            chatList.map((el, i) =>
              el.initiatorName === localStorage.getItem("name") ? (
                <List
                  key={i}
                  $current={el.RoomNumber === roomId}
                  onClick={() => {
                    setMessageList([]);
                    setRoomId(el.RoomNumber);
                    getUserData(el.RoomId);
                  }}
                >
                  <img src={el.receiverAvatar} alt="" />
                  {el.receiverName}
                </List>
              ) : (
                <List
                  key={i}
                  $current={el.RoomNumber === roomId}
                  onClick={() => {
                    setMessageList([]);
                    setRoomId(el.RoomNumber);
                    getUserData(el.RoomId);
                  }}
                >
                  <img src={el.initiatorAvatar} alt="" />
                  {el.initiatorName}
                </List>
              )
            )}
        </ul>
        {roomId ? (
          <Chat>
            <User>
              <img src={remoteData.avatar} alt="" />
              <p>{remoteData.name}</p>
            </User>
            <ul>
              <ul>
                {messageList &&
                  messageList.map((el, i) => {
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
