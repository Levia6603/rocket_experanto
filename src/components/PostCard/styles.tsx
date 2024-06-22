import { styled } from "styled-components";

// 定義 props 的型別

export const Wrapper = styled.div`
  width: 941px;
  //* 因為需要向內推，因此多這層來包所有內容
  & > div {
    display: flex;
    width: 929px;
    height: 262px;
    border: 1px solid black;
    border-radius: 0.25rem;
    position: relative;
    background-color: white;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 12px 12px 0 #000;
    }

    //* Header 區

    //* tag 樣式
    & > div:nth-child(2) {
      display: flex;
      gap: 0.5rem;
      background-color: #454545;
      color: #fff;
      padding: 0.5rem 1rem;
      position: absolute;
      right: -12px;
      top: 1rem;
    }
    //* 文字資訊
    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      gap: 0.5rem;
      padding: 1rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  word-wrap: break-word;
  justify-content: center;
  width: 194px;
  gap: 0.75rem;
  background-color: #fffbf2;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-right: 1px solid black;

  //*大頭照 ＋ 名字
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    // * 大頭照
    > div {
      border-radius: 999px;
      overflow: hidden;
      & > img {
        width: 60px;
        height: 60px;
      }
    }
    // * 名字
    & > h6 {
      font-weight: 900;
    }
  }
  //*愛心按鈕
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    & > img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;

  & > h4 {
    font-weight: 900;
    position: relative;
    z-index: 0;
    &::after {
      content: "";
      display: block;
      width: 105%;
      height: 15px;
      background-color: #ffce26;
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

export const HashTagSection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HashTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  //* 文字
  & > p {
  }
`;
