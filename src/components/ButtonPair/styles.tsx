import { styled } from "styled-components";
import Button from "../../styles/Button";

interface Props {
  $backgroundColor: string;
}

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 12px;
  & > button {
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
  }
`;

export const CancelButton = styled(Button)<Props>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "white"};
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const SubmitButton = styled(Button)<Props>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "black"};
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
