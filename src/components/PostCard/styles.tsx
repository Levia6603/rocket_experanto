import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  //*大頭照 ＋ 名字
  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    > div:nth-child(1) {
      & > img {
        width: 35px;
        height: 35px;
      }
    }
    & > h6 {
      font-weight: 900;
    }
  }
  //*愛心按鈕
  & > div:nth-child(2) {
    & > img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 94px;
  gap: 0.25rem;
  //* 項目
  & > div {
    //* 名稱
    & > div {
      min-width: 124px;
      height: 32px;
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      & > h6 {
      }
    }
    //* 文字
    & > p {
    }
  }
  & > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const HashTagSection = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 94px;
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
