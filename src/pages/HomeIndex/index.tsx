import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { setPages } from "../../../redux/pages/pagesSlice";
import { SimplifiedPostInterface } from "../../components/PostCard";
import { RootStateType } from "../../../redux";
import apiBase from "../../Api";
import PostCardSkeleton from "../PostCardSkeleton";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";
import EmptyData from "../../components/EmptyData";

export interface PostListInterface {
  Code?: number;
  Status?: string | boolean;
  list?: SimplifiedPostInterface[];
  page?: number;
  totalPage?: number;
  totalPost?: number;
  Message: string;
}
[];

type Favorite = {
  postId: number;
};

function HomeIndex() {
  const dispatch = useDispatch();
  const location = useLocation();
  const languageIdfromlanding = location?.state?.languageId;

  const [loading, setLoading] = useState<boolean>(true);
  const [prevFavoriteList, setPrevFavoriteList] = useState<Favorite[]>([]);
  const [postList, setPostList] = useState<PostListInterface | null>(
    {} as PostListInterface
  );
  const token = localStorage.getItem("token");

  const page = useSelector((state: RootStateType) => state.pages.page);
  const languageIds = useSelector(
    (state: RootStateType) => state.pages.languageIds
  );
  const favoriteList = useSelector(
    (state: RootStateType) => state.favoriteList
  );

  // 依據頁數取得文章
  async function getPostListByPage(index: number) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    token ? (headers["Authorization"] = `Bearer ${token}`) : null;

    try {
      const fetchedPostList = await axios({
        method: "GET",
        url: token
          ? `${apiBase.GET_POST_LIST_LOGIN}?page=${index}`
          : `${apiBase.GET_POST_LIST}?page=${index}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPostList(fetchedPostList);
      dispatch(setPages(fetchedPostList.totalPages));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // 依據語言編號取得文章
  const languageQuery = languageIds.map((id) => `languageId=${id}`).join("&");
  async function getPostListByLanguage(index: number, languageQuery: string) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    token ? (headers["Authorization"] = `Bearer ${token}`) : null;

    try {
      const fetchedPostList = await axios({
        method: "GET",
        url: token
          ? `${apiBase.GET_POST_LIST_LOGIN}?page=${index}&${languageQuery}`
          : `${apiBase.GET_POST_LIST}?page=${index}&${languageQuery}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPostList(fetchedPostList);
      dispatch(setPages(fetchedPostList.totalPages));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getPostList() {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      token ? (headers["Authorization"] = `Bearer ${token}`) : null;

      await axios({
        method: "GET",
        url: token
          ? `${apiBase.GET_POST_LIST_LOGIN}`
          : `${apiBase.GET_POST_LIST}`,
        headers: headers,
      })
        .then((res) => {
          //* 未登入
          if (res.data.Status === false) {
            throw new Error(res.data.Message);
          }
          setPostList(res.data);
          dispatch(setPages(res.data.totalPages));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          //* 就算 token 過期還是會取得文章
          const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
          };

          axios({
            method: "GET",
            url: `${apiBase.GET_POST_LIST}`,
            headers: headers,
          })
            .then((res) => {
              setPostList(res.data);
              dispatch(setPages(res.data.totalPages));
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setLoading(false);
            });

          setLoading(false);
        });
    }

    const query = `languageId=${languageIdfromlanding}`;
    languageIdfromlanding ? getPostListByLanguage(1, query) : getPostList();
  }, []);

  useEffect(() => {
    page !== 1 && getPostListByPage(page);
  }, [page]);

  useEffect(() => {
    languageIds.length > 0 && getPostListByLanguage(page, languageQuery);
  }, [languageIds, page, languageQuery]);

  useEffect(() => {
    favoriteList["favoriteList"]?.length &&
      favoriteList["favoriteList"]?.length !== prevFavoriteList.length &&
      getPostListByPage(page);
    setPrevFavoriteList(favoriteList["favoriteList"]);
  }, [favoriteList["favoriteList"]]);

  return (
    <>
      <PostCards>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => {
              return <PostCardSkeleton key={index} />;
            })
          : postList?.list?.map((post) => {
              return <PostCard key={post.PostId} {...post} />;
            })}
        {/* {!loading &&
          postList?.list?.map((post) => {
            return <PostCard key={post.PostId} {...post} />;
          })} */}
        {postList?.list && !postList.list.length && !loading && <EmptyData />}
      </PostCards>
      {postList?.list && <PageBar />}
    </>
  );
}

export default HomeIndex;
