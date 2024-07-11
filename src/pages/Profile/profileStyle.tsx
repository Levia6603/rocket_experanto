import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 40px 0;
`;
export const Container = styled.div`
  display: flex;
  gap: 25px;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;
export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
`;
export const ProfileMenu = styled.div`
  width: 306px;
  height: 10px;
  border: 1px solid #616161;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  img {
    width: 80px;
  }
  h1 {
    margin-right: 24px;
    font-size: 24px;
    font-weight: 900;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    li {
      padding: 6px 0;
    }
    h3 {
      color: #9e9e9e;
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const Box = styled.div`
  align-self: stretch;
  h2 {
    font-size: 24px;
    font-weight: 900;
  }
  hr {
    margin-top: 20px;
    border: 0.5px solid #9e9e9e;
  }
`;
export const Board = styled.div`
  display: flex;
  gap: 20px;
`;
