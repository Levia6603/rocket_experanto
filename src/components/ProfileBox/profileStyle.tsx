import { styled } from "styled-components";

export const Container = styled.div`
  width: 306px;
  min-width: 306px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
`;

//* 個人資料區
export const Photo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  //* 大頭貼
  & > div:nth-child(1) {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    & > img {
      width: 80px;
      object-fit: cover;
    }
  }

  //* 姓名
  & > h5 {
    margin-top: 0.5rem;
    font-weight: 900;
  }

  //* 縣市區域 + 評價
  & > div:nth-child(3) {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    //* 縣市區域
    & > div:nth-child(1) {
      & > p:nth-child(2) {
        font-size: 12px;
        color: #a8acab;
      }
    }

    //* 評價
    & > div:nth-child(2) {
      & > div {
        display: flex;
        align-items: center;
        gap: 4px;

        & > img {
          width: 20px;
          height: 20px;
        }
      }
      & > p {
        font-size: 12px;
        color: #a8acab;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  background-color: white;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    & > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      padding: 12px 1rem;
      cursor: pointer;
      &:hover {
        background-color: #616161;
      }
      & > img {
        width: 18px;
        height: 18px;
      }
    }
    & > li:nth-child(2) {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        & > div {
          width: 38px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e0e0e0;
          border-radius: 2rem;
          & > p {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
