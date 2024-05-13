import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../styles/Button";

export const NavSection = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1320px;
  padding: 15px 0.75rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & li:first-child {
    padding-left: 225px;
    padding-right: 130px;
  }

  & li:nth-child(2) {
    & > Button {
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
    }
  }
  & li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const NavListItem = styled(NavLink)`
  cursor: pointer;
  list-style: none;
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

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }
`;
