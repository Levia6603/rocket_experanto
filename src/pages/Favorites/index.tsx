import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";
import { Container, Wrapper, Title, Cards, Card, CardWrapper } from "./styles";
import EmptyData from "../../components/EmptyData";
import Loading from "../../components/Loading";
import { setLoading } from "../../../redux/loadingState/loadingState";
import { setPages } from "../../../redux/pages/pagesSlice";
import { setFavoriteList } from "../../../redux/favoriteList/favoriteListSlice";
import { RootStateType } from "../../../redux";
import PageBar from "../../components/PageBar";
import { SortWrapper } from "../WaitingList/styles";
import { Btn } from "../../styles/Btn";
import pinkHeart from "/pinkHeart.svg";

interface Post {
  postId: number;
  userAvatar: string;
  isFavorite: boolean;
  PostCreatetDate: string;
  postTitle: string;
}
interface data {
  Status: string | boolean;
  Code: number;
  message: string;
  list: Post[];
  page: number;
  totalPages: number;
  total: number;
}

function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sort, setSort] = useState("由新到舊");
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );
  const favoriteList = useSelector(
    (state: RootStateType) => state.favoriteList.favoriteList
  );
  const [data, setData] = useState<data>({} as data);

  const sortedList =
    data && data.list
      ? [...data.list]?.sort((a: Post, b: Post) => {
          if (sort === "由新到舊") {
            return (
              new Date(b.PostCreatetDate).getTime() -
              new Date(a.PostCreatetDate).getTime()
            );
          } else {
            return (
              new Date(a.PostCreatetDate).getTime() -
              new Date(b.PostCreatetDate).getTime()
            );
          }
        })
      : [];

  const handleChange = (sort: string) => {
    setSort(sort);
  };

  const handleFavorite = (el: React.MouseEvent<HTMLDivElement>) => {
    //* 阻止事件冒泡
    el.stopPropagation();

    //* 點擊收藏、取消收藏的 API
    async function isFavorite(postId: number, isFavorited: boolean) {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      try {
        await axios({
          //* 判斷是POST還是DELETE
          method: isFavorited ? "DELETE" : "POST",
          url: isFavorited
            ? `${apiBase.DELETE_FAVORITE_LIST}/${postId}`
            : `${apiBase.POST_FAVORITE_LIST}/${postId}`,
          headers: headers,
        })
          .then(() => {
            // 更新 favoriteList 狀態
            if (isFavorited) {
              // 如果已經收藏，則移除
              dispatch(
                setFavoriteList(
                  favoriteList.filter((favorite) => favorite.postId !== postId)
                )
              );
            } else {
              // 如果未收藏，則新增
              dispatch(setFavoriteList([...favoriteList, { postId }]));
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
      } finally {
        getFavoriteList();
        dispatch(setPages(data.totalPages));
      }
    }

    //* 找到包含 data-postid 属性的元素
    let targetElement = el.target as HTMLElement;
    while (targetElement && !targetElement.dataset.postid) {
      targetElement = targetElement.parentElement as HTMLElement;
    }
    //* 如果找到了 PostId 執行以下動作
    if (targetElement) {
      //* 因為從props傳過來的PostId是字串，要先轉成數字
      const postId = Number(targetElement.dataset.postid);

      //* 判斷是postId是否存在，如果存在則執行 some 來確認是否已經收藏
      if (postId) {
        const isFavorited = favoriteList.some(
          (favorite) => favorite.postId === postId
        );
        isFavorite(postId, isFavorited);
      }
    }
  };

  async function getFavoriteList() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    dispatch(setLoading(true));
    try {
      const data = await axios({
        method: "GET",
        url: `${apiBase.GET_FAVORITE_LIST}`,
        headers: headers,
      })
        .then((res) => {
          res.data.Status === false && navigate("/login");
          return res.data;
        })
        .catch((err) => console.log(err));
      setData(data);
      dispatch(setFavoriteList(data.list));
      dispatch(setPages(data.totalPages));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <>
      {loadingState && <Loading />}

      <Wrapper>
        <Container>
          <Title>我的最愛</Title>
          <SortWrapper>
            <p>時間排序</p>
            <select value={sort} onChange={(e) => handleChange(e.target.value)}>
              <option value="由新到舊">從新到舊</option>
              <option value="由舊到新">從舊到新</option>
            </select>
          </SortWrapper>

          <Cards>
            {sortedList && sortedList.length > 0 ? (
              sortedList?.map((el) => (
                <CardWrapper key={el.postId} data-postid={el.postId}>
                  <Card
                    onClick={() => {
                      navigate(`/home/post/${el.postId}`);
                    }}
                  >
                    <div>
                      <div onClick={handleFavorite}>
                        <img src={pinkHeart} alt="收藏" />
                      </div>
                      <div>
                        <img src={el.userAvatar} alt="post" />
                      </div>
                    </div>
                    <div>
                      <h4>{el.postTitle}</h4>
                      <p>發佈日期: {el.PostCreatetDate}</p>
                    </div>
                    <div>
                      <Btn $style={"outline"}>詳細資料</Btn>
                    </div>
                  </Card>
                </CardWrapper>
              ))
            ) : (
              <EmptyData />
            )}
          </Cards>
        </Container>
        {data && data.Status === "ok" && <PageBar />}
      </Wrapper>
    </>
  );
}

export default Favorites;
