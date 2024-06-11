import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import apiBase from "../../Api";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import { setPostId } from "../../../redux/postId/postIdSlice";
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

type favorite = {
  postId: number;
};

function PostCard({ ...props }: SimplifiedPostInterface) {
  //* 設定dispatch
  const dispatch = useDispatch();

  const [favoriteList, setFavoriteList] = useState<favorite[]>([]);

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
    //* 點擊收藏、取消收藏的 API
    async function isFavorite(postId: number) {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      try {
        await axios({
          //* 用使 some 來檢查是否有收藏，some 會在物件的postId中檢查是否有收藏，有找到的話就回傳true，沒有就回傳false
          method: favoriteList.some((favorite) => favorite.postId === postId)
            ? "DELETE"
            : "POST",
          //* 如果沒有收藏就POST，有收藏就DELETE，因為filter會產生出一個新的物件陣列，但即使用空陣列，它還是一個物件，所以根據判斷，這個陣列會永遠為true，因此改檢查它的長度
          url:
            favoriteList.filter((favorite) => favorite.postId === postId)
              .length > 0
              ? `${apiBase.DELETE_FAVORITE_LIST}/${postId}`
              : `${apiBase.POST_FAVORITE_LIST}/${postId}`,
          headers: headers,
        });
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
      postId && isFavorite(postId);
    }
  };

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
          setFavoriteList(res.data.list);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <Wrapper data-postid={props?.PostId || ""} onClickCapture={handleClick}>
      <div>
        <Header>
          <div>
            <div>
              <img src={props.userAvatar} alt="avatar" />
            </div>
            <h6>{props.userName}</h6>
          </div>
          <div onClickCapture={handleFavorite}>
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
