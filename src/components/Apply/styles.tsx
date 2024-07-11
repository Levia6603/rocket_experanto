import { css, styled } from "styled-components";
import Button from "../../styles/Button";

interface TimeBtnProps {
  readonly $select: boolean;
}

export const Wrapper = styled.section`
  width: 768px;
  margin: 0 auto;
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
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
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
      border: 1px solid #000;
      border-radius: 60px;
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
      border: 0;
      border-radius: 4px;
      background-color: #e2e2e2;
      color: #c6c6c6;
      font-size: 16px;
      line-height: 1.5;
      cursor: not-allowed;
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

export const Schedule = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 92px;
  }
`;

export const Label = styled.p`
  width: 100%;
  padding: 8px;
  border-top: 4px solid #5e5e5e;
  text-align: center;
`;

export const TimeBtn = styled.li<TimeBtnProps>`
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  ${({ $select }) =>
    $select
      ? css`
          background-color: #dfdfdf;
        `
      : css`
          background-color: #fff;
        `}

  &:hover {
    background-color: #dfdfdf;
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
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
  width: 100%;
`;
