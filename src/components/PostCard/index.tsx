import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import apiBase from "../../Api";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import { setPostId } from "../../../redux/postId/postIdSlice";
import { setFavoriteList } from "../../../redux/favoriteList/favoriteListSlice";
import { RootStateType } from "../../../redux";
import { Wrapper, Header, Content, HashTagSection, HashTag } from "./styles";
import liked from "/profile_box_icons/heart.svg";
import solidLiked from "/solid-heart.svg";
import exchange from "/exchange_icon.svg";

export interface SimplifiedPostInterface {
  Learn?: string;
  PostId: number;
  content?: string;
  isFavorite?: boolean;
  skill?: string;
  tags?: string[];
  title?: string;
  userAvatar?: string;
  userName?: string;
}

function PostCard({ ...props }: SimplifiedPostInterface) {
  //* 設定dispatch
  const dispatch = useDispatch();
  //* 從 redux state 取得收藏清單
  const favoriteList = useSelector(
    (state: RootStateType) => state.favoriteList.favoriteList
  );

  //* 點擊卡片後叫出offCanvas，做一系列動作
  const handleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    //* 找到包含 data-postid 属性的元素
    let targetElement = el.target as HTMLElement;
    while (targetElement && !targetElement.dataset.postid) {
      targetElement = targetElement.parentElement as HTMLElement;
    }
    //* 如果找到了 PostId 執行以下動作
    if (targetElement) {
      const postId = targetElement.dataset.postid;
      dispatch(setSlidingPostState());
      dispatch(setPostId(postId));
    }
  };

  //* 點擊收藏、取消收藏
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

  useEffect(() => {
    //* 取得收藏清單
    async function getFavoriteList() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      try {
        await axios({
          method: "GET",
          url: apiBase.GET_FAVORITE_LIST,
          headers: headers,
        })
          .then((res) => {
            dispatch(setFavoriteList(res.data.list));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
      }
    }
    getFavoriteList();
  }, []);

  return (
    <Wrapper data-postid={props?.PostId || ""} onClick={handleClick}>
      <div>
        <Header>
          <div>
            <div>
              <img src={props.userAvatar} alt="avatar" />
            </div>
            <h6>{props.userName}</h6>
          </div>
          <div onClick={handleFavorite}>
            {props.isFavorite ? (
              <img src={solidLiked} alt="solidLiked" />
            ) : (
              <img src={liked} alt="liked" />
            )}
            <p>收藏</p>
          </div>
        </Header>

        <div>
          <p>{props?.Learn}</p>
          <img src={exchange} alt="" />
          <p>{props?.skill}</p>
        </div>

        <div>
          <Content>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
          </Content>
          <HashTagSection>
            {props.tags?.map((el, index) => (
              <HashTag key={index}>
                <p>{el}</p>
              </HashTag>
            ))}
          </HashTagSection>
        </div>
      </div>
    </Wrapper>
  );
}
export default PostCard;
