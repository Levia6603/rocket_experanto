import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../styles/Button";
import Selector from "../Selector";

export const Section = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1320px;
  padding: 15px 0.75rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 115px;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-left: 404px;

  & li:first-child {
  }

  & li:nth-child(2) {
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 0;
      padding: 0;
      padding-left: 8px;
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
    }
  }
`;

export const LinkItem = styled(NavLink)`
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

export const NavBtn = styled(Button)`
  min-width: 65px;
  min-height: 40px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SearchBar = styled.div`
  width: 472px;

  border-radius: 4px;
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;

  & > input {
    min-width: 0;
    height: 50px;
    flex: 1;
    border: 0;
    font-size: 16px;
    padding: 8px 16px;
    ::placeholder {
      color: black;
    }
  }

  & > button {
    cursor: pointer;
    padding: 15px 13px;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid #bdbdbd;
    border-right: 0;
    color: white;
    background-color: transparent;
  }
`;

export const LanguageSelector = styled(Selector)`
  width: fit-content;
  height: 21px;
  background-color: transparent;
  border: 0;
  font-size: 14px;
  padding: 0;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: fit-content;
    & > ul {
      width: fit-content;
      & > li {
        width: fit-content;
        padding: 0.5rem;
      }
    }
  }
`;
