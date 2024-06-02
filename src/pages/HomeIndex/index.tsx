import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../../../redux/pages/pagesSlice";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";
import { Wrapper, AreaSelector } from "./styles";
import apiBase from "../../Api";
import axios from "axios";
import { SimplifiedPostInterface } from "../../components/PostCard";
import { RootStateType } from "../../../redux";

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
  const dispatch = useDispatch();
  const page = useSelector((state: RootStateType) => state.pages.page);

  const area = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];
  const defaultValue = "請選擇區域";
  const [selectArea, setSelectArea] = useState(defaultValue);
  function handleSelect(el: string) {
    setSelectArea(el);
  }

  //* 把資料存入 Post List
  const [postList, setPostList] = useState<PostListInterface | null>(
    {} as PostListInterface
  );
  //* 根據頁碼傳回指定頁數的內容
  async function getPostListByPage(index: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const postList = await axios({
        method: "GET",
        url: `${apiBase.GET_POST_LIST}?page=${index}`,
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
    //*取得 Post List的函式，利用把函式建立在useEffect內可以減少不必要的依賴管理
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
        dispatch(setPages(postList.totalPages));
      } catch (error) {
        console.error(error);
      }
    }
    getPostList();
  }, [dispatch]);

  //* 當page的數字變動時重新渲染畫面
  useEffect(() => {
    getPostListByPage(page);
  }, [page]);

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
