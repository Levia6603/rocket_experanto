import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Wrapper = styled.section`
  width: 100%;
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

//* 內容區
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
`;

//* 內容上
export const Header = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.25rem;
    & > h5 {
      font-weight: 900;
    }
    & > p {
      color: #616161;
    }
  }
  & > div:nth-child(2) {
  }
`;

//* 內容中
export const Body = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  //* 上半部
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #bdbdbd;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1rem;

    //* 大頭貼
    & > div {
      display: flex;
      align-items: center;
      flex-grow: 1;
      margin: 0 auto;
      & > img {
        width: 80px;
        height: 80px;
      }
    }
    //* 名字
    & > h6 {
      font-weight: 900;
    }
  }

  //* 下半部
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;

    //* 項次
    & > label {
      display: flex;
      gap: 0.5rem;
      & > input {
      }
      & > p {
      }
    }
  }
`;

//* 內容下
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    padding: 0 0.5rem;
  }
`;

//* 終止按鈕
export const DeterminationButton = styled(Button)`
  border: 0;
  background-color: transparent;
  border-radius: 0.5rem;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CompleteButton = styled(Button)`
  border: 0;
  background-color: e0e0e0;
  border-radius: 0.5rem;
  &:hover {
    background-color: #dbdbdb;
  }
`;

export const ReviewButton = styled(Button)`
  border: 0;
  background-color: transparent;
  border-radius: 0.5rem;
  &:hover {
    background-color: #e0e0e0;
  }
`;
