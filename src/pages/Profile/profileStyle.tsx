import styled from "styled-components";

interface processProps {
  $percent: number;
}

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
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
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
export const Achiev = styled.div`
  display: flex;
  gap: 10px;
  width: 287px;
  margin-top: 12px;
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: #9e9e9e;
    }
  }
  li {
    &:nth-child(2) {
      padding: 8px 12px;
      border-radius: 8px;
      background-color: #ffddbb;
      p {
        color: #000;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;
export const ProcessBar = styled.div<processProps>`
  position: relative;
  width: 220px;
  height: 8px;
  box-shadow: inset 0 0 4px #bbbbbb;
  background-color: #d3d3d3;
  border-radius: 8px;
  &::before {
    content: "";
    position: absolute;
    width: ${({ $percent }) => (200 / 100) * $percent}px;
    height: 8px;
    border-radius: 8px;
    background-color: #ffddbb;
  }
`;
