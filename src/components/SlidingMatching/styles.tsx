import { styled } from "styled-components";
import Button from "../../styles/Button";

interface WrapperProps {
  $isVisible: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  width: 50%;
  height: 100vh;
  background-color: #fcfcfc;
  position: fixed;
  top: 0;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  transition: right 0.5s ease-in-out;
  border: 1px solid #616161;
  border-radius: 4px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 2;
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  //* 返回按鈕
  & > button:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & > svg {
      width: 20px;
      height: 20px;
    }
    &:hover {
      background-color: transparent;
    }
  }
`;

//* 內容區
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  //* 按鈕區
  & > div:nth-of-type(6) {
    display: flex;
    justify-content: end;
    gap: 1rem;
  }
`;

//* 用戶資料
export const Header = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  //* 大頭照區
  & > div:nth-of-type(1) {
    //* 大頭照
    & > div:nth-of-type(1) {
      width: 60px;
      height: 60px;
      border: 1px solid #616161;
      border-radius: 999px;
      overflow: hidden;

      & > img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
  }

  //* 使用者姓名、所在地、留言數
  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    //* 使用者名稱
    & > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > h2 {
        font-weight: bold;
      }
      & > button {
      }
    }

    //* 使用者所在地
    & > div:nth-of-type(2) {
      display: flex;
      gap: 0.75rem;
      & > p {
        color: #616161;
      }
    }

    //* 留言數
    & > div:nth-of-type(3) {
      display: flex;
      gap: 0.75rem;
      padding-top: 4px;
      & > p {
        color: #616161;
      }
    }
  }
`;

//* 關閉按鈕
export const CloseBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const Info = styled.div``;

export const Certifications = styled.div`
  & > div:nth-of-type(1) {
    border-bottom: 2px solid #616161;
    padding-bottom: 0.5rem;
    & > h6 {
      font-weight: bold;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Certification = styled.div`
  padding: 0.5rem;
  & > img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
