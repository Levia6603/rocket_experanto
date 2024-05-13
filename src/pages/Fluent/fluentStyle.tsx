import { styled } from "styled-components";
import ProcessBox from "../../styles/ProcessBox";
import Button from "../../styles/Button";
import Selector from "../../components/Selector";

export const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 10px);
`;

export const FluentBox = styled(ProcessBox)`
  width: 642px;
  img {
  }
  & > p:nth-child(3) {
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }
  & > p {
    font-size: 1rem;
    text-align: center;
    margin-top: 12px;
  }
  select {
    width: 596px;
    height: 52px;
    margin-top: 12px;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  & select > option {
    background-color: white;
    color: black;
  }
  & label {
    padding-top: 1.5rem;
    & > p {
      margin: 0;
    }
    & > p::after {
      content: "*";
      color: red;
      margin-left: 0.5rem;
    }
  }
  & > div {
    width: 100%;
  }
`;

export const ContinueButton = styled(Button)`
  background-color: black;
  color: white;
  width: 596px;
  height: 52px;
  margin-top: 1.5rem;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const CustomSelect = styled(Selector)`
  width: 596px;
  margin-top: 0.5rem;
  & > div {
    width: 596px;
  }
`;
