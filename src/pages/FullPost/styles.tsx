import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 6rem;
`;
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

export const Plans = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }
  //* 內容
  & > div:nth-child(2) {
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    //* 教學計畫
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
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
      display: flex;
      min-width: 111px;
    }
    //* 教學計畫內容
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`;

export const Certifications = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }
  //* 證書區
  & > div:nth-child(2) {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
  }
`;

export const Certification = styled.div`
  width: 204px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  //* 圖片
  & > div {
    border-radius: 4px;
    overflow: hidden;
    & > img {
      width: 204px;
      height: 204px;
    }
  }
  //* 文字
  & > h6 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
  }
`;

export const Tags = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }
  //* 標籤區
  & > div:nth-child(2) {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid #616161;
  border-radius: 4px;
`;

export const PostButton = styled(Button)`
  min-width: 83px;
  min-height: 40px;
  border-radius: 4px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  & > ${PostButton}:nth-child(1) {
    background-color: transparent;
    border: 1px solid #616161;
  }
  & > ${PostButton}:nth-child(2) {
    background-color: #616161;
    border: 1px solid #616161;
    color: #fff;
  }
`;
