import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Wrapper = styled.section`
  width: 768px;
  padding: 1.5rem;
`;

export const CloseButton = styled(Button)`
  border: 0;
  background-color: transparent;
  padding: 0;
  padding-bottom: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 1px solid #616161;
  margin: 0 auto;
  & > div {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  //* 大頭貼
  & > div {
    & > img {
      width: 60px;
      height: 60px;
    }
  }
  //* 姓名
  & > h6 {
    font-weight: 900;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.5rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    //* 項次標題
    & > h6 {
      color: #616161;
      font-weight: bold;
      &::after {
        content: "*";
        color: red;
        padding-left: 0.5rem;
      }
    }
    & > input {
      padding: 0.5rem 1rem;
    }
    & > textarea {
      max-width: 100%;
      height: 100px;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 4px;
    }
  }
`;

export const ScheduleWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  & > h6 {
    color: #616161;
    font-weight: bold;
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;

export const CertificationWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  & > h6 {
    color: #616161;
    font-weight: bold;
    border-bottom: 1px solid #616161;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    &::after {
      content: "請根據你的內容刪除不需要的證照";
      font-size: 0.5rem;
      padding-left: 0.5rem;
    }
  }
`;
