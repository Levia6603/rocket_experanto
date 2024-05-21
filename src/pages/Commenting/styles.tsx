import { styled } from "styled-components";
import Button from "../../styles/Button";

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
    padding: 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
  }

  //* 評價區
  & > div:nth-child(3) {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
  }
`;

export const Title = styled.h4`
  width: 100%;
  font-weight: 700;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 4px solid #9e9e9e;
  & > h5 {
    font-weight: 900;
  }
  & > p {
    color: #9e9e9e;
  }
`;

export const Course = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  //*大頭貼
  &div:nth-child(1) {
    & > div {
      & > img {
      }
    }
  }
  //* 教學計劃
  & > div:nth-child(2) {
    & > h6 {
      color: #000000;
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-top: 0.5rem;
      & > p {
        color: #000000;
      }
    }
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
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
    width: 100%;
    height: 86px;
    border: 1px solid #dbdbdb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #000000;
`;
