import { useEffect } from "react";
import { Container, List, Title, Wrapper } from "./styles";
import axios from "axios";
import apiBase from "../../Api";

function CommentList() {
  async function getList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const data = await axios
      .get(apiBase.GET_RATING_LIST, { headers })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>已完成貼文</Title>
        <List></List>
      </Container>
    </Wrapper>
  );
}

export default CommentList;
