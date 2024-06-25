import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCheckProfileState } from "../../../redux/checkProfile/checkProfileSlice";
import { useTranslation } from "react-i18next";

import {
  Section,
  Container,
  NavbarLoggedIn,
  LinkItem,
  NavBtn,
  Logo,
  SearchBar,
  LanguageSelector,
  NavbarNotLoggedIn,
} from "./navStyle";
import { Btn } from "../../styles/Btn";
import logo from "/logo_full.svg";
import bell from "/profile_box_icons/bell.svg";
import global from "/global.svg";
import apiBase, { headers } from "../../Api";
import axios from "axios";
import { setLoading } from "../../../redux/loadingState/loadingState";

interface ProfileType {
  Code: number;
  Status: string;
  message: string;
  userName?: string;
  userAvatar?: string;
  skills?: { language: string; languageId: number; goal: string[] };
  img?: string[];
}

function Nav() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const localLanguage = localStorage.getItem("language");

  const languages = ["English", "中文"];
  const defaultValue = localLanguage || "English";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  //* 發文前確是否已完成個人資料
  const [isCompleted, setIsCompleted] = useState({} as ProfileType);
  function handleSelect(el: string) {
    setSelectLanguage(el);
  }

  //* 切換語言 i18n
  function handleLanguage(lang: string) {
    window.localStorage.setItem("language", lang);
  }

  //* redux toolkit
  const dispatch = useDispatch();

  //* 發文前確認個人資料是否填寫完成
  async function checkProfile() {
    await axios({
      method: "GET",
      url: apiBase.GET_CHECK_POST,
      headers: headers,
    })
      .then((res) => {
        setIsCompleted(res.data);
        dispatch(setCheckProfileState(res.data));
      })
      .catch((err) => console.log(err));
  }
  //* 發文
  function handlePost() {
    dispatch(setLoading(true));
    checkProfile();
  }
  //* 登入按鈕
  function handleLogin() {
    navigate("/login");
  }
  //* 註冊按鈕
  function handleRegister() {
    navigate("/login");
  }

  useEffect(() => {
    !localLanguage
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage(localLanguage);
  }, [localLanguage, i18n]);

  useEffect(() => {
    selectLanguage && window.localStorage.setItem("language", selectLanguage);
  }, [selectLanguage]);

  return (
    <>
      <Section>
        <Container>
          <div>
            <Logo onClick={() => navigate("/home/index")}>
              <img src={logo} alt="experanto logo" />
            </Logo>
            <SearchBar>
              <input type="text" placeholder={t("nav_search_placeholder")} />
              <button type="button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_102)">
                    <path
                      d="M17.6134 15.5152C19.0658 13.5332 19.7163 11.0759 19.4348 8.6349C19.1533 6.19389 17.9605 3.94918 16.095 2.34987C14.2295 0.750556 11.829 -0.0854205 9.37362 0.00918925C6.91825 0.103799 4.58915 1.12202 2.85227 2.86014C1.1154 4.59825 0.098846 6.92809 0.00599324 9.38352C-0.0868595 11.839 0.750834 14.2389 2.35148 16.1032C3.95213 17.9676 6.19769 19.1588 8.6389 19.4386C11.0801 19.7183 13.5369 19.066 15.5179 17.6122H15.5164C15.5614 17.6722 15.6094 17.7292 15.6634 17.7847L21.4384 23.5597C21.7196 23.8411 22.1012 23.9993 22.4991 23.9995C22.897 23.9996 23.2787 23.8417 23.5601 23.5604C23.8416 23.2792 23.9998 22.8976 23.9999 22.4997C24.0001 22.1018 23.8421 21.7201 23.5609 21.4387L17.7859 15.6637C17.7322 15.6094 17.6746 15.5592 17.6134 15.5137V15.5152ZM18.0004 9.74917C18.0004 10.8326 17.787 11.9054 17.3724 12.9063C16.9578 13.9072 16.3501 14.8167 15.584 15.5828C14.8179 16.3489 13.9084 16.9566 12.9075 17.3712C11.9066 17.7858 10.8338 17.9992 9.75037 17.9992C8.66696 17.9992 7.59417 17.7858 6.59323 17.3712C5.5923 16.9566 4.68282 16.3489 3.91674 15.5828C3.15066 14.8167 2.54297 13.9072 2.12836 12.9063C1.71376 11.9054 1.50037 10.8326 1.50037 9.74917C1.50037 7.56114 2.36956 5.46272 3.91674 3.91554C5.46391 2.36837 7.56233 1.49917 9.75037 1.49917C11.9384 1.49917 14.0368 2.36837 15.584 3.91554C17.1312 5.46272 18.0004 7.56114 18.0004 9.74917Z"
                      fill="#c6c6c6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_102">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </SearchBar>
          </div>
          {isLoggedIn ? (
            <NavbarLoggedIn>
              <li>
                <LinkItem
                  to={
                    isCompleted.Code !== 200 ? "/posting" : "/user/profile/edit"
                  }
                >
                  <NavBtn onClick={handlePost}>{t("nav_post")}</NavBtn>
                </LinkItem>
              </li>
              <li>
                <LinkItem to={"/notification"}>
                  <div>
                    <img src={bell} alt="notification" />
                  </div>
                </LinkItem>
              </li>
              <li>
                <div>
                  <img src={global} alt="language" />
                </div>
                <LanguageSelector
                  size="short"
                  languageList={languages}
                  currentValue={localLanguage || selectLanguage}
                  setValue={handleSelect}
                  onChange={handleLanguage(selectLanguage)}
                />
              </li>
            </NavbarLoggedIn>
          ) : (
            <NavbarNotLoggedIn>
              <li>
                <div>
                  <img src={global} alt="language" />
                </div>
                <LanguageSelector
                  size="short"
                  languageList={languages}
                  currentValue={localLanguage || selectLanguage}
                  setValue={handleSelect}
                  onChange={handleLanguage(selectLanguage)}
                />
              </li>
              <li>
                <Btn $style={"outline"} onClick={handleLogin}>
                  {t("nav_login")}
                </Btn>
              </li>
              <li>
                <Btn $style={"outline"} onClick={handleRegister}>
                  {t("nav_signUp")}
                </Btn>
              </li>
            </NavbarNotLoggedIn>
          )}
        </Container>
      </Section>
    </>
  );
}

export default Nav;
