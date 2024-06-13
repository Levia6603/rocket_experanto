import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPages } from "../../../redux/pages/pagesSlice";
import { SimplifiedPostInterface } from "../../components/PostCard";
import { RootStateType } from "../../../redux";
import apiBase from "../../Api";
import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";

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
  const navigate = useNavigate();

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
      setLoading(false);
    } catch (error) {
      console.error(error);
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
      setLoading(false);
    } catch (error) {
      console.error(error);
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

      try {
        await axios({
          method: "GET",
          url: token
            ? `${apiBase.GET_POST_LIST_LOGIN}`
            : `${apiBase.GET_POST_LIST}`,
          headers: headers,
        })
          .then((res) => {
            setPostList(res.data);
            dispatch(setPages(res.data.totalPages));
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getPostList();
  }, [dispatch]);

  useEffect(() => {
    getPostListByPage(page);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    languageIds.length > 0
      ? getPostListByLanguage(page, languageQuery)
      : getPostListByPage(page);
  }, [languageIds, page, languageQuery]);

  useEffect(() => {
    favoriteList["favoriteList"]?.length !== prevFavoriteList.length &&
      getPostListByPage(page);
    setPrevFavoriteList(favoriteList["favoriteList"]);
  }, [favoriteList["favoriteList"]]);

  useEffect(() => {
    postList?.Status === false && navigate("/login");
  }, [postList?.Status, navigate]);

  return (
    <>
      <PostCards>
        {loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "900" }}>
              讀取中...
            </h2>
          </div>
        ) : postList?.list ? (
          postList?.list?.map((post) => (
            <PostCard key={post.PostId} {...post} />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "900" }}>
              讀取中...
            </h2>
          </div>
        )}
      </PostCards>
      {postList?.list && <PageBar />}
    </>
  );
}

export default HomeIndex;
