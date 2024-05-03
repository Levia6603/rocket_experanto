import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../Button";

export const NavSection = styled.nav``;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & li {
    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      p {
        margin: 0.5rem;
      }
    }
  }
`;

export const NavListItem = styled(NavLink)`
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  color: black;

  :visited {
    color: black;
  }
`;

export const NavBtn = styled(Button)`
  border-radius: 4px;
  border: 0;
`;

export const SearchBar = styled.div`
  border-radius: 4px;
  border: 1px solid #bdbdbd;

  input {
    width: 674px;
    height: 50px;
    border: 0;
    font-size: 16px;
    padding: 8px 16px;
    ::placeholder {
      color: black;
    }
  }

  button {
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
