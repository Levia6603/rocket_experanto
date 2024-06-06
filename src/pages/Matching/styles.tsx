import { styled, css } from "styled-components";
import Button from "../../styles/Button";

interface ButtonProps {
  $isOpen: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 900;
  padding-bottom: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

//* 請求卡片的最外層
export const CardWrapper = styled.div<ButtonProps>`
  width: 100%;
`;

//* 一則請求卡片
export const Card = styled.div<ButtonProps>`
  display: flex;
  background-color: #fcfcfc;
  border: 1px solid #5e5e5e;
  border-radius: 8px;
  ${({ $isOpen }) =>
    $isOpen !== true &&
    css`
      border-bottom: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `}

  padding: 0.75rem;

  //* 內容
  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;

    //* 貼文標題
    & > div:nth-of-type(1) {
      & > h5 {
      }
    }
    //* 留言人數&最新申請時間
    & > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      //* 留言人數
      & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 4px;
        padding-right: 0.5rem;
        border-right: 3px solid #bdbdbd;
        & > div {
          & > img {
            width: 20px;
            height: 20px;
          }
        }
        & > p {
        }
      }
      //* 最新申請時間
      & > div:nth-of-type(2) {
        & > p {
        }
      }
    }
  }
  //* 按鈕區
  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
  }
`;

//* 收合按鈕
export const ShowDetailsButton = styled(Button)<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #5e5e5e;
  color: white;
  border-radius: 0.5rem;
  border: 0;
  & > img {
    width: 1rem;
    height: 1rem;
    ${({ $isOpen }) =>
      $isOpen === true &&
      css`
        transform: rotate(-180deg);
      `}
    transition: all 0.3s;
  }
`;
//* 候選人區
export const Candidates = styled.div<ButtonProps>`
  width: 100%;
  display: none;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: flex;
    `}
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #fcfcfc;
  border: 1px solid #5e5e5e;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 1rem 1.5rem;
  overflow: hidden;
`;

//* 候選人卡片
export const Candidate = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #424242;
  border-radius: 0.25rem;
  transition: all 0.3s;

  &:hover {
    box-shadow: 4px 4px 0px #5e5e5e;
  }
  //* 卡片的左半部
  & > div:nth-of-type(1) {
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background-color: #fffbf2;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    //* 大頭貼
    & > div:nth-of-type(1) {
      width: 60px;
      height: 60px;
      border-radius: 999px;
      overflow: hidden;
      & > img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
    //* 人名
    & > h5 {
      color: #454545;
      font-weight: 900;
      font-weight: 700;
      text-align: center;
    }
    //* 申請時間
    & > p:nth-of-type(1) {
      font-size: 0.75rem;
      color: #919191;
      text-align: center;
    }
  }
  //* 卡片的右半部
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #ffffff;
    flex-grow: 1;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 1rem;

    //* 要交換的語言項目
    & > div:nth-of-type(1) {
      display: flex;
      gap: 0.5rem;
      width: fit-content;
      background-color: #454545;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      white-space: nowrap;
    }

    //* 學習動機
    & > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > p:nth-of-type(1) {
        color: #454545;
        font-weight: 900;
      }
    }
  }
`;
