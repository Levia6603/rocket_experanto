import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
  padding: 32px;

  //* 基本資訊
  & > div:nth-child(2) {
    width: 100%;
  }

  //* 評價區
  & > div:nth-child(3) {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
`;

export const Title = styled.h4`
  width: 100%;
  font-weight: 700;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #9e9e9e;
  & > p {
    color: #9e9e9e;
  }
`;

export const Course = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  background-color: #fff;
  //*大頭貼
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 96px;
    p {
      font-size: 16px;
      font-weight: 700;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
    }
  }
  //* 教學計劃
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 8px;
    li {
      font-size: 16px;
      color: #454545;
    }
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  margin: 0.5rem;
  margin-top: 24px;
  & > h6 {
    font-weight: 900;
    color: #000000;
  }
  //* 送出按鈕區
  & > div:nth-of-type(5) {
    display: flex;
    justify-content: end;
    padding-right: 1rem;
  }
`;

export const ReviewItem = styled.div`
  padding-left: 1rem;
  & > p {
    margin-bottom: 8px;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > ul {
    display: flex;
    gap: 0.5rem;
    padding-left: 1rem;
    & > li {
      & > img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  & > p {
    color: #000000;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > textarea {
    max-width: 805px;
    height: 86px;
    border: 1px solid #dbdbdb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
  }
  button {
    align-self: flex-end;
  }
`;
