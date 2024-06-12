import { useEffect, useState } from "react";
import { Chat, Container, Label, List, Message, User, Wrapper } from "./style";
import axios from "axios";
import apiBase from "../../Api";

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

function TextChat() {
  const [chatList, setChatList] = useState<ChatList>([]);

  //得到聊天室列表
  async function getChatList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const list = await axios
        .get(apiBase.GET_CHATLIST, { headers })
        .then((res) => res.data.chatlist);

      setChatList(list);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getChatList();
  }, []);
  return (
    <Wrapper>
      <Container>
        <ul>
          <Label>Conversations</Label>
          <List></List>
          {/* {chatList.map((el, i) => (
            <List key={i}>
              <img src={el.receiverAvatar} alt="" />
              {el.receiverName}
            </List>
          ))} */}
        </ul>
        <Chat>
          <User>
            <img src="" alt="" />
            <p>YANG</p>
          </User>
          <ul>
            <ul>
              <Message $idenity={true}>
                <img src="" alt="" />
                <p>123456</p>
              </Message>
              <Message $idenity={true}>
                <img src="" alt="" />
                <p>
                  庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許
                </p>
              </Message>
              <Message $idenity={false}>
                <img src="" alt="" />
                <p>
                  庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許庭院深深深幾許
                </p>
              </Message>
            </ul>
          </ul>
        </Chat>
      </Container>
    </Wrapper>
  );
}

export default TextChat;
