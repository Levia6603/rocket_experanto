import styled, { css } from "styled-components";

interface MessageProps {
  readonly $idenity: boolean;
}
interface ListProps {
  readonly $current: boolean;
}

export const Wrapper = styled.section`
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1296px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  ul {
    border-right: 1px solid #c6c6c6;
  }
`;

export const Label = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #c6c6c6;
  font-size: 20px;
  font-weight: 700;
`;

export const List = styled.li<ListProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 439px;
  height: 68px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 700;
  img {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 40px;
  }
  &:hover {
    background-color: #f1f1f1;
  }

  ${({ $current }) =>
    $current &&
    css`
      background-color: #ffce26;
    `}
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ul {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;
    overflow-y: scroll;
    border: 0;
    padding: 16px 12px;
    justify-content: flex-end;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
  width: 100%;
  height: 68px;
  padding: 0 12px;
  border-bottom: 1px solid #c6c6c6;
  font-size: 16px;
  font-weight: 700;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

const currentUser = css`
  flex-direction: row-reverse;
  p {
    background-color: #f1f1f1;
  }
  a {
    background-color: #ffce26;
  }
`;

const remoteUser = css`
  p {
    background-color: #ffce26;
  }
  a {
    background-color: #ffce26;
  }
`;

export const Message = styled.li<MessageProps>`
  display: flex;
  gap: 8px;
  p {
    max-width: 650px;
    padding: 8px 12px;
    border-radius: 12px;
  }
  a {
    max-width: 650px;
    padding: 8px 12px;
    border-radius: 12px;
    text-decoration: underline;
    word-break: break-all;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  ${({ $idenity }) => ($idenity ? currentUser : remoteUser)}
`;

export const InputGroup = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  input {
    width: 95%;
    padding: 8px;
    border: 1px solid #5e5e5e;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
  }
  button {
    height: 24px;
    border: 0;
    background-color: transparent;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
