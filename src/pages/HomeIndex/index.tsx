import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";
import { Wrapper, AreaSelector } from "./styles";
import apiBase from "../../Api";
import axios from "axios";

interface PostList {
  postId?: number;
  userName?: string;
  userAvatar?: string;
  isFavorite?: boolean;
  title?: string;
  Learn?: string;
  skill?: string;
  content?: string;
  tags?: string[];
}
[];

function HomeIndex() {
  const area = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];
  const defaultValue = "請選擇區域";
  const [selectArea, setSelectArea] = useState(defaultValue);
  function handleSelect(el: string) {
    setSelectArea(el);
  }
  const [postList, setPostList] = useState<PostList | null>({} as PostList);

  async function getPostList() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const postList = await axios({
        method: "GET",
        url: `${apiBase.GET_POST_LIST}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPostList(postList);
    } catch (error) {
      console.error(error);
    }
  }

  //* 接回 Post List
  useEffect(() => {
    getPostList();
  }, []);

  useEffect(() => {
    console.log(postList);
  }, [postList]);

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
