import { useState, useEffect } from "react";
import axios from "axios";
import apiBase from "../../Api";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";
import { Wrapper, AreaSelector } from "./styles";

function HomeIndex() {
  const area = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];
  const defaultValue = "請選擇區域";
  const [selectArea, setSelectArea] = useState(defaultValue);
  function handleSelect(el: string) {
    setSelectArea(el);
  }

  async function getPost() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const postList = await axios({
        method: "GET",
        url: apiBase.GET_POST,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      console.log(postList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Wrapper>
        <AreaSelector
          size="short"
          languageList={area}
          currentValue={selectArea}
          setValue={handleSelect}
        />
      </Wrapper>

      <PostCards>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCards>
      <PageBar />
    </>
  );
}

export default HomeIndex;
