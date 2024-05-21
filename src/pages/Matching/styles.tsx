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
  border: 1px solid #bdbdbd;
  ${({ $isOpen }) =>
    $isOpen === false &&
    css`
      border-bottom: 3px solid #bdbdbd;
    `}

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
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
  background-color: transparent;
  border-radius: 0.5rem;
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
  gap: 0.5rem;
  border: 1px solid #bdbdbd;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.5rem;
  overflow: hidden;
`;

//* 候選人卡片
export const Candidate = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 0.5rem;
  //* 卡片的上半部
  & > div:nth-of-type(1) {
    width: 288px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background-color: #bdbdbd;

    //* 大頭貼
    & > div:nth-of-type(1) {
      & > img {
      }
    }
    //* 人名
    & > p:nth-of-type(1) {
      font-weight: 900;
    }
    //* 申請時間
    & > p:nth-of-type(2) {
      color: black;
    }
  }
  //* 卡片的下半部
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & > div:nth-of-type(1) {
      display: flex;

      & > p:nth-child(1) {
        width: 50%;
        padding: 0.5rem;
        border-right: 1px solid #bdbdbd;
        font-weight: 900;
      }
      & > p:nth-child(2) {
        width: 50%;
        padding: 0.5rem;
        border-left: 1px solid #bdbdbd;
        font-weight: 900;
      }
    }
    & > div:nth-of-type(2) {
      width: 288px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > p:nth-of-type(1) {
      }
      & > p:nth-of-type(2) {
      }
    }
  }
`;
