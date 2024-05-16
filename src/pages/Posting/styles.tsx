import { styled } from "styled-components";
import Selector from "../../components/Selector";
import { Button } from "../Profile/profileStyle";

export const Wrapper = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 1320px;
  padding: 60px 232px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding-bottom: 3rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Subject = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  & > h6 {
    font-weight: bold;
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
`;

export const PeriodContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & > h6 {
    font-weight: bold;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;
export const Period = styled(Selector)`
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
      width: fit-content;
      & > li {
        width: fit-content;
        padding: 1rem;
      }
    }
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > section {
    display: flex;
    justify-content: center;
  }
`;

export const Fluent = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
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
    & > ul {
      width: fit-content;
      & > li {
        width: fit-content;
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
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;
export const WantedList = styled(Selector)`
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
      width: fit-content;
      & > li {
        width: fit-content;
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
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
  & > textarea {
    width: 100%;
    height: 86px;
    border: 1px solid #dbdbdb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export const Tag = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
    &::after {
      content: "*";
      color: red;
      padding-left: 0.5rem;
    }
  }
`;

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

export const Certification = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
  }
`;
export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 110px;
  min-width: 110px;
  min-height: 135px;
  padding: 1rem;
  & > div {
    border-radius: 4px;
    overflow: hidden;
    & > img {
      width: 78px;
      height: 78px;
    }
  }
`;
export const DeleteButton = styled(Button)`
  display: flex;
  justify-content: end;
  min-width: 16px;
  min-height: 16px;
  border: 0;
  background-color: transparent;
  padding: 0;
  padding-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
  & > img {
    width: 16px;
    height: 16px;
  }
`;
