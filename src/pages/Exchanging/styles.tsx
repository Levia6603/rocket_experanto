import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 966px;
  h2 {
    margin-bottom: 36px;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #5e5e5e;
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    color: #919191;
    font-weight: 40;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 8px;
    img {
      width: 20px;
      height: 20px;
    }
    button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const CardAlbum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  padding: 12px;
`;

const grayScale = css<{ checked?: boolean }>`
  ${({ checked = false }) => (checked ? "color: #C6C6C6;" : "#454545")}
`;
const card = css<{ checked?: boolean }>`
  display: flex;

  width: 100%;
  padding: 0;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  background-color: #fcfcfccc;
  position: relative;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 180px;
    padding: 10px;

    & > img {
      width: 70px;
      height: 70px;
      border: 1px solid #000;
      border-radius: 70px;
      ${({ checked = false }) => (checked ? "margin-top: 4rem;" : "")}
    }
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    ${grayScale}
  }
  li {
    padding: 6px 12px;
  }
`;

const tag = css<{ checked?: boolean }>`
  & > div:nth-of-type(2) {
    display: ${({ checked = false }) => (checked ? "flex" : "none")};
    gap: 0.5rem;
    align-items: center;
    background-color: #777777;
    position: absolute;
    z-index: 1;
    left: -0.75rem;
    top: 1.25rem;
    padding: 0.5rem;
    //* icon
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      & > img {
        width: 24px;
        height: 24px;
      }
    }
    //* 文字
    & > p {
      font-size: 16px;
      font-weight: 700;
      color: #ffce26;
    }
  }
`;

export const CurrentCard = styled.div<{ checked?: boolean }>`
  ${card}
  ${tag}
  

  & > div:nth-child(1) {
    background-color: #fff;
  }
`;

export const RemoteCard = styled.div<{ checked?: boolean }>`
  ${card}
  ${tag}
  
  &>div:nth-child(1) {
    background-color: #ffefcb;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  & > button:nth-child(1) {
    border: 0;
    background-color: transparent;
    color: #454545;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
