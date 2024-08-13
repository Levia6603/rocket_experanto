import { styled } from "styled-components";
import Selector from "../../components/Selector";
import { Button } from "../Profile/profileStyle";
import Select from "../../components/Select";

export const Wrapper = styled.section``;

export const Container = styled.div`
  max-width: 856px;
  padding: 24px 28px;
  margin: 0 auto;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  background-color: #fff;
  h5 {
    margin-top: 32px;
    color: #454545;
    font-size: 16px;
    font-weight: 700;
  }
  h6 {
    color: #454545;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;

export const Title = styled.h2`
  padding-bottom: 3rem;
  font-weight: 700;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 347px;
    padding: 8px 16px;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    color: #5e5e5e;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Subject = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  & > h5 {
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > input {
    width: 100%;
    height: 48px;
    border: 1px solid #dbdbdb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
  }
  & > span {
    width: 100%;
    color: red;
    padding: 0.5rem 0.5rem;
  }
`;

export const PeriodContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & > h5 {
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  & > h5 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #5e5e5e;
    font-weight: 700;
  }
  & > section {
    display: flex;
    justify-content: center;
  }
  & > span {
    width: 100%;
    color: red;
    padding: 0.5rem 0.5rem;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  padding: 0 20px;
  div {
    display: flex;
    gap: 8px;
    div {
      display: flex;
      align-items: start;
      padding: 8px 0;
    }
    input {
      width: 16px;
      height: 24px;
      margin: 0;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 368px;
        height: 42px;
        margin-bottom: 8px;
      }
    }
    & > div:nth-child(1) {
      width: 72px;
      margin-right: 48px;
    }
    & > ul:nth-child(3) {
      width: 56px;
      margin-left: 48px;
      li {
        display: flex;
        gap: 16px;
        height: 42px;
        margin-bottom: 8px;
      }
      img {
        width: 20px;
        cursor: pointer;
      }
    }
  }
  & > div:nth-child(1) {
    p {
      padding: 12px 0;
      font-size: 12px;
    }
    & > p:nth-child(1) {
      width: 72px;
      margin-right: 48px;
    }
    & > p:nth-child(2) {
      width: 180px;
      &::after {
        content: " *";
        color: red;
      }
    }
    & > p:nth-child(3) {
      width: 180px;
      &::after {
        content: " *";
        color: red;
      }
    }
    & > p:nth-child(4) {
      width: 56px;
      margin-left: 48px;
    }
  }
`;

export const Fluent = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h5 {
    border-bottom: 1px solid #5e5e5e;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > span {
    width: 100%;
    color: red;
    padding: 0.5rem 0.5rem;
  }
`;
export const FluentList = styled(Selector)`
  min-width: 347px;
  max-width: 347px;
  max-height: 52px;
  min-height: 52px;
  background-color: white;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: 347px;
    z-index: 9999;
    & > ul {
      width: 100%;
      & > li {
        width: 100%;
        padding: 1rem;
      }
    }
  }
`;

export const Wanted = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h5 {
    border-bottom: 1px solid #5e5e5e;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > span {
    width: 100%;
    color: red;
    padding: 0.5rem 0.5rem;
  }
`;
export const WantedList = styled(Select)`
  min-width: 347px;
  max-width: 347px;
  max-height: 52px;
  min-height: 52px;
  background-color: transparent;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: 347px;
    & > ul {
      width: 100%;
      & > li {
        width: 100%;
        padding: 1rem;
      }
    }
  }
`;

export const Motivation = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h5 {
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > textarea {
    max-width: 100%;
    height: 86px;
    border: 1px solid #dbdbdb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
  }
  & > span {
    width: 100%;
    color: red;
    padding: 0.5rem 0.5rem;
  }
`;

export const Tag = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h5 {
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  span {
    font-weight: 400;
  }
  ul {
    display: flex;
    gap: 4px;
  }
  li {
    padding: 2px 8px;
    border: 1px solid #9f9f9f;
    border-radius: 4px;
    color: #9f9f9f;
    font-size: 12px;
    img {
      height: 8px;
    }
  }
`;

//* 輸入框
export const InputTag = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 0.5rem;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  & > input {
    width: 100%;
    height: 37px;
    border: 0;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
  &:focus-within {
    border: 1px solid #dbdbdb;
  }
`;
export const TagButton = styled(Button)`
  min-width: 60px;
  min-height: 37px;
  border-radius: 8px;
  background-color: transparent;
  font-size: 14px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CertificationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h5 {
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
`;
