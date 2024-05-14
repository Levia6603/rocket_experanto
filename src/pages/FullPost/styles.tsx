import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > div:nth-child(1) {
    & > img {
      width: 80px;
      height: 80px;
    }
  }
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 12px;
      & > h4 {
        font-weight: bold;
        padding-right: 12px;
        border-right: 1px solid #616161;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 12px;
      & > div:nth-child(1) {
        padding-right: 12px;
        border-right: 1px solid #616161;
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 6px;

        & > p {
          color: #616161;
          font-weight: bold;
        }
        & > img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  //* 文章標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 20px;
    & > h4 {
      font-weight: bold;
    }
  }
  //* 詳細資訊
  & > div:nth-child(2) {
    padding-top: 12px;
    & > div {
      display: flex;
      gap: 0.5rem;
      & > p {
        color: #616161;
        font-weight: bold;
      }
    }
  }
`;

export const Calendar = styled.div`
  width: 100%;
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }
  & > div:nth-child(2) {
    padding-top: 0.75rem;
  }
`;

export const Needs = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }
  //* 詳細資訊
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 0.75rem;
    & > div {
      display: flex;
      gap: 0.5rem;
      //* 項目
      & > h6 {
        display: flex;
        justify-content: end;
        align-items: center;
        max-width: 112px;
        max-height: 32px;
        min-width: 112px;
        min-height: 32px;
        background-color: #e0e0e0;
        border-radius: 4px;
      }
      & > p {
        display: flex;
        align-items: center;
      }
    }
  }
`;
