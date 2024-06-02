import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";
import { Wrapper, AreaSelector } from "./styles";
import apiBase from "../../Api";
import axios from "axios";
import { SimplifiedPostInterface } from "../../components/PostCard";

export interface PostListInterface {
  Code?: number;
  Status?: string;
  list?: SimplifiedPostInterface[];
  page?: number;
  totalPage?: number;
  totalPost?: number;
}
[];

function HomeIndex() {
  const area = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];
  const defaultValue = "請選擇區域";
  const [selectArea, setSelectArea] = useState(defaultValue);
  function handleSelect(el: string) {
    setSelectArea(el);
  }
  const [postList, setPostList] = useState<PostListInterface | null>(
    {} as PostListInterface
  );
  //*取得 Post List的函式
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

  async function getPost() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const post = await axios({
        method: "GET",
        url: apiBase.GET_POST_LIST,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      console.log(post);
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
        {postList?.list?.map((post) => (
          <PostCard key={post.PostId} {...post} />
        ))}
      </PostCards>
      <PageBar />
    </>
  );
}

export default HomeIndex;
