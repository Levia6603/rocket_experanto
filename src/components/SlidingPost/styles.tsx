import { styled } from "styled-components";
import Button from "../../styles/Button";

interface WrapperProps {
  $isVisible: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  width: 50%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  transition: right 0.5s ease-in-out;
  border: 1px solid #616161;
  border-radius: 4px;
  overflow: hidden;
  overflow-y: auto;
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  & > button:nth-child(1) {
  }
  & > button:nth-child(2) {
    & > p {
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  //* 大頭照
  & > div:nth-of-type(1) {
    & > img {
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
      gap: 1rem;
      padding-top: 4px;
      & > p {
      }
    }

    //* 留言數
    & > div:nth-of-type(3) {
      display: flex;
      gap: 1rem;
      padding-top: 4px;
      & > p {
        color: #616161;
      }
    }
  }
`;

export const CloseBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const OpenBtn = styled(Button)`
  display: flex;
  gap: 0.75rem;
  border: 0;
  background-color: transparent;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Info = styled.div``;

export const Certifications = styled.div``;
