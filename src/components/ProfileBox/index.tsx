import { useNavigate } from "react-router-dom";
import { Container, Photo, Menu } from "./profileStyle";
import star from "/profile_box_icons/star-yellow.svg";
import allPost from "/profile_box_icons/all-post.svg";
import notification from "/profile_box_icons/bell.svg";
import apply from "/profile_box_icons/clipboard-check.svg";
import processing from "/profile_box_icons/friends.svg";
import personal from "/profile_box_icons/person.svg";
import posted from "/profile_box_icons/card-checklist.svg";
import like from "/profile_box_icons/heart.svg";
import expired from "/profile_box_icons/clock.svg";
import waiting from "/profile_box_icons/cup-hot.svg";
import completed from "/profile_box_icons/trophy.svg";
import logout from "/profile_box_icons/box-arrow-in-right.svg";
import dropdown from "/profile_box_icons/chevron-down.svg";
import dropUp from "/profile_box_icons/chevron-up.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
import { setShowAll } from "../../../redux/profileState/profileState";
import { useState, useEffect } from "react";

interface listInterface {
  icon: string;
  name: string;
  url?: string;
  method?: () => void;
}
function ProfileBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* 把目前的功能選單長度狀態存到redux
  const showAll = useSelector(
    (state: RootStateType) => state.profileState.showAll
  );

  //* 用登入狀態決定是否可以發文
  const [isLogin, setLogin] = useState(false);
  //* 如果有 token 的話就可以看到發文按妞
  useEffect(() => {
    const isToken = localStorage.getItem("token");
    setLogin(isToken ? true : false);
  }, []);

  //* 設定選單
  const list: listInterface[] = [
    {
      icon: allPost,
      name: "所有貼文",
      url: "/home/index",
    },
    {
      icon: notification,
      name: "通知中心",
      url: "/user/notifications",
    },
    {
      icon: apply,
      name: "申請與配對審核區",
      url: "/user/matching",
    },
    {
      icon: processing,
      name: "已配對貼文交換區",
      url: "/user/exchanging/5",
    },
    {
      icon: personal,
      name: "個人資訊",
      url: "/user/profile/index",
    },
    {
      icon: posted,
      name: "已發表貼文區",
      url: "",
    },
    {
      icon: like,
      name: "貼文收藏區",
      url: "",
    },
    {
      icon: expired,
      name: "已過期貼文",
      url: "",
    },
    {
      icon: waiting,
      name: "貼文回覆等待區",
      url: "/user/waiting_list",
    },
    {
      icon: completed,
      name: "交換完成區",
      url: "/user/commenting/:id",
    },
    {
      icon: logout,
      name: "登出",
      url: "/home",
      method: handleLogout,
    },
    {
      icon: dropUp,
      name: "顯示更少",
      method: () => dispatch(setShowAll()),
    },
  ];
  //* 從localStorage取得使用者資訊
  const userName = localStorage.getItem("name");
  const avatar = localStorage.getItem("avatar");

  //* 用戶登出
  function handleLogout() {
    setLogin(false);
    localStorage.clear();
  }
  const listToShow = showAll ? list.length : 4;

  return (
    <>
      {isLogin && (
        <Container>
          <Photo>
            <div>
              <img src={avatar || ""} alt="大頭貼" />
            </div>
            <h5>{userName}</h5>
            <div>
              <div>
                <p>Taipei</p>
                <p>縣市區域</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <p>
                    5.0 <span> (1)</span>
                  </p>
                </div>
                <p>評價</p>
              </div>
            </div>
          </Photo>
          <Menu>
            <ul>
              {list.slice(0, listToShow).map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    item.url && navigate(item.url);
                    item.method && item.method();
                  }}
                >
                  <img src={item.icon} alt="" />
                  <p>{item.name}</p>
                </li>
              ))}
              {!showAll && (
                <li
                  onClick={() => {
                    dispatch(setShowAll());
                  }}
                >
                  <img src={dropdown} alt="" />
                  <p>顯示全部</p>
                </li>
              )}
            </ul>
          </Menu>
        </Container>
      )}
    </>
  );
}

export default ProfileBox;
