import styled from "styled-components";
import last from "/landing/last.svg";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Landing = styled.section`
  width: 100%;
  background-color: #fff9eb;
  display: flex;
  justify-content: center;

  //* container
  & > div {
    width: 1320px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    //* 標題文字區
    & > div:nth-child(1) {
      & > h1 {
        font-size: 56px;
        font-weight: 700;
        color: #454545;
        word-wrap: break-word;
      }
      & > p {
        color: #919191;
        font-weight: 40;
      }
      & > button {
        margin-top: 3rem;
      }
    }

    //* 圖片區
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 8px;
      & > div {
        & > img {
          width: 636px;
          height: 652px;
        }
      }
    }
  }
`;

export const Languages = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: #fff;
  padding-top: 5rem;
  padding-bottom: 5rem;

  //* container
  & > div {
    width: 1320px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    //* 標題文字區
    & > div:nth-child(1) {
      width: 100%;
      & > h2 {
        font-weight: 700;
        color: #212121;
      }
      & > p {
        color: #212121;
      }
    }
    //* card
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  }
`;

export const LanguageCard = styled.div`
  width: 306px;
  max-width: 306px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 2rem;
  background-color: #000;
  color: #fff;
  border-radius: 0.5rem;
  & > h4:nth-of-type(1) {
    font-weight: 700;
  }
  & > p:nth-of-type(1) {
    font-weight: 700;
    & > span {
      color: #e2e2e2;
    }
  }
`;

export const Video = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff3d2;
  //* container
  & > div {
    width: 1320px;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      & > h2 {
        color: #212121;
        font-weight: 700;
      }
      & > p {
        font-size: 20px;
        color: #212121;
      }
    }
    & > div:nth-child(2) {
      display: flex;
    }
  }
`;

export const Processes = styled.section`
  width: 100%;
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
  & > div {
    width: 100%;
    background-color: #fff9eb;
    display: flex;
    justify-content: center;

    //* container
    & > div {
      width: 1320px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem 0;
      gap: 1rem;

      //* 標題文字區
      & > h2 {
        font-weight: 700;
        color: #212121;
      }

      //* 說明卡片
      & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
      }
    }
  }
`;

export const ProcessCard = styled.div`
  width: 635px;
  max-width: 635px;
  display: flex;
  background-color: #fcfcfccc;
  gap: 12px;
  border: 1px solid #5e5e5e;
  border-radius: 8px;

  //* 圖片區
  & > div:nth-child(1) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    & > img {
      width: 306px;
      height: 306px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  //* 說明文字區
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    //* 編號
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      min-height: 40px;
      border-radius: 999px;
      padding: 0.5rem;
      background-color: #303030;
      & > p {
        font-weight: 700;
        color: #fcfcfc;
      }
    }
    //* 說明文字
    & > h5 {
      font-weight: 700;
      color: #212121;
    }
  }
`;

export const FinalGreetings = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${last});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  & > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: hsla(0, 0%, 100%, 0.8);
      border-radius: 1rem;
      padding: 2rem;

      & > p:nth-child(1) {
        font-weight: 700;
        font-size: 40px;
        color: #000;
      }
      & > p:nth-child(2) {
        font-size: 24px;
        padding-top: 12px;
      }
      & > div {
        padding-top: 40px;
      }
    }
  }
`;
