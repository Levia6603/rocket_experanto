import { styled } from "styled-components";

type Active = {
  $active?: boolean | undefined;
};

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
    & > span {
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

  //* 選單
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
`;

export const Item = styled.li<Active>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 1rem;
  background-color: ${({ $active }) => ($active ? "#f1f1f1" : "transparent")};

  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 3px #000;

    transition: all 0.3s;
  }
  &:active {
    box-shadow: 0 0 0;
    transition: all 0s;
  }

  & > img {
    width: 18px;
    height: 18px;
  }
`;
