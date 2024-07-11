import { styled } from "styled-components";
import Button from "../Button";

export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;

  & > img {
    width: 14px;
    height: 14px;
  }
  & > p {
    margin: 0;
  }
`;
