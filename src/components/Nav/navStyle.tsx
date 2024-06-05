import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../styles/Button";
import Selector from "../Selector";

export const Section = styled.nav`
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1320px;
  padding: 1rem 0;
  //* 第一組LOGO + 搜尋區
  & > div {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
`;

//* logo
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;
  cursor: pointer;
  img {
    width: 200px;
    height: 50px;
  }
`;

//* 搜尋區
export const SearchBar = styled.div`
  width: 20rem;
  height: 2.25rem;
  border-radius: 4px;
  border: 1px solid #c6c6c6;
  display: flex;
  align-items: center;

  & > input {
    background-color: transparent;
    height: 100%;
    flex: 1;
    border: 0;
    font-size: 0.75rem;
    padding: 0.5rem;
    ::placeholder {
      color: #c6c6c6;
    }
  }

  & > button {
    display: flex;
    color: #c6c6c6;

    cursor: pointer;
    padding: 0.5rem;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid #c6c6c6;
    border-right: 0;
    background-color: transparent;
  }
`;

// * 登入後可以看到的選項
export const NavbarLoggedIn = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;

  //* 發文
  & li:first-child {
  }

  //* 通知按鈕
  & li:nth-child(2) {
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      & > p {
        margin: 0.5rem;
      }
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  //* 語言選擇器
  & li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div:nth-of-type(1) {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      z-index: 2;
    }
  }
`;

//* 未登入可以看到的選項
export const NavbarNotLoggedIn = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;

  //* 語言選擇器
  & li:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div:nth-of-type(1) {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      z-index: 2;
    }
  }
`;

//* 連結的 item 外框
export const LinkItem = styled(NavLink)`
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

//* 放在連結內的按鈕
export const NavBtn = styled(Button)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #919191;
  color: #fcfcfc;
  border: 1px solid #e0e0e0;
  &:hover {
    background-color: #e0e0e0;
  }
`;

//* 語言選擇按鈕
export const LanguageSelector = styled(Selector)`
  width: fit-content;
  height: 21px;
  background-color: transparent;
  border: 0;
  font-size: 14px;
  padding: 0.5rem 1rem;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: fit-content;
    top: 30px;
    padding: 0.5rem 1rem;
    & > ul {
      width: fit-content;
      & > li {
        width: fit-content;
        padding: 0.5rem;
      }
    }
  }
`;
