import styled, { css, keyframes } from "styled-components";

interface VideoProps {
  readonly $current: boolean;
}
interface MessageProps {
  readonly $idenity: boolean;
}

export const Container = styled.section`
  display: flex;
  height: 100vh;
  background-color: #000;
`;

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
  justify-content: center;
  flex-grow: 1;
  position: relative;
  height: 100vh;
  padding: 30px 40px;
  background-color: #000;
`;

export const Label = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  z-index: 1;
  cursor: pointer;
  p {
    color: #fff;
  }
`;

const LocalUser = css`
  position: absolute;
  right: 18px;
  top: 12px;
  z-index: 1;
  width: 208px;
  height: 208px;
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
  width: 100vw;
  height: 100vh;
`;

export const Video = styled.video<VideoProps>`
  ${({ $current }) => ($current ? LocalUser : RemoteUser)}
`;

export const BtnGroup = styled.ul`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 27px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 40px;
    background-color: #e0e0e0;
    cursor: pointer;
    &:hover {
      background-color: #bbbaba;
    }
  }
`;

const showChat = () => keyframes`
  from{
    transform: translateX(416px);
  }
  to{
    transform: translateX(0);
  }
`;

export const Chat = styled.div`
  position: relative;
  z-index: 2;
  width: 416px;
  height: 100vh;
  padding: 8px;
  animation: ${() => showChat()} 0.3s ease-in;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 12px;
    border-radius: 4px;
    background-color: #fff;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex-grow: 1;
    gap: 16px;
    overflow: scroll;
    padding: 16px 0;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 68px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  h3 {
    font-size: 14px;
    font-weight: 700;
  }
`;

const remote = css`
  align-self: start;
  background-color: #ffce26;
`;

const current = css`
  align-self: flex-end;
  background-color: #f1f1f1;
`;

export const Message = styled.li<MessageProps>`
  max-width: 280px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;

  ${({ $idenity }) => ($idenity ? current : remote)}
`;

export const InputGroup = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  button {
    width: 30px;
    height: 24px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  img {
    width: 24px;
    height: 24px;
  }
  input {
    width: 90%;
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #5e5e5e;
    border-radius: 4px;
    outline: none;
  }
`;
