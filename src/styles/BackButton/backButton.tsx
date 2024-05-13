import { styled } from "styled-components";
import Button from "../Button";

export const BackButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;

  background-color: gray;
  color: black;
  border: 0;
  border-radius: 999px;

  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
