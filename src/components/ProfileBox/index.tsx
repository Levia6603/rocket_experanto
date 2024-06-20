import { useNavigate } from "react-router-dom";
import { Container, Photo, Menu } from "./profileStyle";
import star from "/profile_box_icons/star-yellow.svg";
import allPost from "/profile_box_icons/all-post.svg";
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
import { ProfileType } from "../../pages/ProfileIndex";
import axios from "axios";
import apiBase from "../../Api";

interface listInterface {
  icon: string;
  name: string;
  url?: string;
  method?: () => void;
}
function ProfileBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({} as ProfileType);
  const showAll = useSelector(
    (state: RootStateType) => state.profileState.showAll
  );
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    setLogin(isToken ? true : false);
  }, []);

  async function getProfile() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const profile: ProfileType = await axios({
      method: "GET",
      url: apiBase.GET_PROFILE,
      headers: headers,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    setProfile(profile);
  }

  useEffect(() => {
    getProfile();
  }, []);

  //* 設定選單
  const list: listInterface[] = [
    {
      icon: allPost,
      name: "所有貼文",
      url: "/home/index",
    },
    {
      icon: personal,
      name: "個人資訊",
      url: "/user/profile/index",
    },
    {
      icon: processing,
      name: "開始交換",
      url: "/user/exchanging_list",
    },
    {
      icon: apply,
      name: "回覆請求",
      url: "/user/matching",
    },

    {
      icon: posted,
      name: "我的貼文",
      url: "",
    },
    {
      icon: like,
      name: "收藏",
      url: "",
    },
    {
      icon: expired,
      name: "過期貼文",
      url: "",
    },
    {
      icon: waiting,
      name: "等待大廳",
      url: "/user/waiting_list",
    },
    {
      icon: completed,
      name: "查看評價",
      url: "/user/commenting",
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
                <p>{profile?.location}</p>
                <p>縣市區域</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <p>
                    {profile?.Score} <span> ({profile?.ScoreCount})</span>
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
