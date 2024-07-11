import { styled } from "styled-components";
import Button from "../../styles/Button";
import Selector from "../../components/Selector";

interface ItemProps {
  $isRead: boolean;
  $category: string;
}

export const Wrapper = styled.section`
  width: 100%;
  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 900;
  padding-bottom: 2rem;
`;

//* 分類標籤
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #e0e0e0;
  border-bottom: 1px solid #acabad;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 0 1.5rem;
`;

//* 分類按鈕外框
export const TagWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  padding-bottom: 3px;
  border-bottom: 5px solid transparent;
  &:hover {
    border-bottom: 5px solid black;
  }
`;

//* 分類按鈕本體
export const TagButton = styled(Button)`
  border: 0;
  background-color: transparent;
  padding: 0;
`;

//* 通知數
export const NotificationCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 12px;
  padding: 0.5rem;
  border-radius: 100%;
`;

//* 內容區
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1.5rem;
`;

//* 排序區
export const SortWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
  & > p {
    color: #868e96;
  }
`;

//*排序下拉選單
export const Sort = styled(Selector)`
  width: 100%;
  min-width: 10rem;
  max-width: 10rem;
  max-height: 2rem;
  min-height: 2rem;
  background-color: transparent;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: 10rem;
    & > ul {
      width: 100%;
      & > li {
        width: 100%;
        padding: 0.5rem 1rem;
      }
    }
  }
`;

//* 通知區
export const List = styled.ul``;

//* 通知項目
export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #dbdbdb;
  padding: 1rem;

  //* 已讀mark
  & > div:nth-child(1) {
    width: 1rem;
    height: 1rem;
    padding: 4px;
    & > div {
      display: ${({ $isRead }) => ($isRead ? "none" : "block")};
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: red;
    }
  }
  //* 大頭貼
  & > div:nth-child(2) {
    & > div {
      & > img {
        width: 40px;
        height: 40px;
      }
    }
  }
  //* 通知區
  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5rem;
    & > p:nth-child(1) {
      color: #000;
      & > span {
        font-weight: 900;
      }
    }
    & > p:nth-child(2) {
      color: #868e96;
      & > span {
        font-weight: 900;
      }
    }
  }
  //* 類別
  & > div:nth-child(4) {
    & > div {
      display: flex;
      align-items: center;
      width: fit-content;
      background-color: ${({ $category }) =>
        $category === "matching" ? "#f8f9fa" : "#e0e0e0"};
      padding: 4px 8px;
      border-radius: 1rem;
      & > p {
        color: ${({ $category }) =>
          $category === "matched" ? "black" : "white"};
      }
    }
  }
`;
