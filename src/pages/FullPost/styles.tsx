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
  max-width: 965px;
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
  background-color: #fff;
  h5 {
    font-size: 16px;
    font-weight: 700;
  }
  h6 {
    flex-shrink: 0;
    width: 80px;
  }
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
      border: 1px solid #000;
      border-radius: 80px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    & > div:nth-child(1) {
      & > h4 {
        font-weight: bold;
        padding-right: 12px;
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
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 12px;
    & > p {
      color: #454545;
      span {
        margin-left: 8px;
        font-weight: 700;
        color: #454545;
      }
    }
  }
`;

export const Calendar = styled.div`
  width: 100%;
  & > div:nth-child(1) {
    border-bottom: 2px solid #616161;
    padding-bottom: 0.5rem;
  }
  & > div:nth-child(2) {
    padding-top: 0.75rem;
  }
`;

export const Needs = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 2px solid #616161;
    padding-bottom: 0.5rem;
  }
  //* 詳細資訊
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 0.75rem;
    & > div {
      display: flex;
      gap: 0.5rem;
      //* 項目
      & > h6 {
        color: #454545;
      }
      p {
        color: #454545;
      }
      span {
        font-weight: 700;
      }
    }
  }
`;

export const Plans = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 2px solid #616161;
    padding-bottom: 0.5rem;
  }
  //* 內容
  & > div:nth-child(2) {
    display: flex;
    gap: 8px;
    padding-top: 12px;
    p {
      margin-bottom: 8px;
    }
    ol {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    li {
      display: flex;
      gap: 8px;
    }
  }
`;

export const Certifications = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 2px solid #616161;
    padding-bottom: 0.5rem;
  }
  //* 證書區
  & > div:nth-child(2) {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
  }
`;

export const Certification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
  width: 130px;
  height: 130px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  //* 圖片
  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
  }
  //* 文字
`;

export const Tags = styled.div`
  width: 100%;
  //* 標題
  & > div:nth-child(1) {
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
  }
  //* 標籤區
  & > div:nth-child(2) {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
`;

export const Tag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid #616161;
  border-radius: 4px;
  font-size: 14px;
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

export const PopUp = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  background-color: #d5d5d5da;
`;
