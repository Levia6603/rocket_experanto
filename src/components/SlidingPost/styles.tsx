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

//* 控制列
export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  //* 返回按鈕
  & > button:nth-child(1) {
  }

  //* 查看完整貼文
  & > button:nth-child(2) {
    & > p {
    }
  }
`;

//* 內容區
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  h5 {
    font-size: 16px;
    font-weight: 700;
  }
  h6 {
    flex-shrink: 0;
    width: 81px;
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
    & > div {
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
      padding-top: 4px;
      & > p {
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

export const Certifications = styled.div`
  display: flex;
  flex-direction: column;
  & > div:nth-child(1) {
    padding: 8px 0;
    border-bottom: 2px solid #454545;
    margin-bottom: 8px;
    h6 {
      font-weight: 700;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
  }
`;
