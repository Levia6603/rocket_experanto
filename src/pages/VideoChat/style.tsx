import styled, { css } from "styled-components";

interface VideoProps {
  readonly $current: boolean;
}

export const EnterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffce26;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 800px;
    height: 500px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 15px 15px 0;
    text-align: center;
  }
  h2 {
    font-size: 36px;
    font-weight: 800;
  }
  input {
    margin-right: 10px;
    padding: 8px 16px;
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 16px;
  }
  button {
    padding: 8px 16px;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    transition: box-shadow 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;
      box-shadow: 3px 3px 0 #000;
    }
    &:active {
      background-color: #000;
      color: #fff;
      box-shadow: 0 0 0;
      transition: box-shadow 0s;
    }
  }
`;

export const CallPage = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  height: 100vh;
  padding: 30px 40px;
  background-color: #000;
`;

export const Label = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  cursor: pointer;
  p {
    color: #fff;
  }
`;

const LocalUser = css`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px #fff;
  }
`;

const RemoteUser = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

export const Video = styled.video<VideoProps>`
  ${({ $current }) => ($current ? LocalUser : RemoteUser)}
`;

export const BtnGroup = styled.ul`
  position: absolute;
  bottom: 10px;
`;
