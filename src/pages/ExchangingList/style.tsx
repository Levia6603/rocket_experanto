import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 900;
  padding-bottom: 2.25rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1.75rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #fcfcfc;
  border: 1px solid #5e5e5e;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;

  //* 大頭照
  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 999px;
      overflow: hidden;
      & > img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }
  //* 內容
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
    flex-grow: 1;

    //* 貼文標題 ＋ 貼文者名稱
    & > div:nth-of-type(1) {
      display: flex;
      gap: 0.5rem;
      //* 貼文標題
      & > h4:nth-of-type(1) {
        font-weight: 700;
        padding-right: 0.5rem;

        border-right: 2px solid #5e5e5e;
      }
      //* 貼文者名稱
      & > h4:nth-of-type(2) {
        font-weight: 700;
      }
    }

    //* 貼文時間
    & > div:nth-of-type(2) {
      display: flex;
      & > p {
        color: #919191;
      }
    }
  }

  //* 按鈕
  & > div:nth-of-type(3) {
  }
`;
