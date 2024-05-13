import { styled } from "styled-components";
import ProcessBox from "../../styles/ProcessBox";
import Button from "../../styles/Button";
export const LoginSection = styled.section``;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 7rem);
`;

export const LoginWithGoogleButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: white;
  color: black;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 6px 12px;
  margin-top: 1rem;
  cursor: pointer;
`;

export const LoginBox = styled(ProcessBox)`
  & > div {
    width: 475px;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }
  & > div {
    & > p {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }
    & > div {
      display: flex;
      justify-content: center;
    }
  }
`;
