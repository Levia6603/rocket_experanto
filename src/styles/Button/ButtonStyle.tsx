import styled from "styled-components";
import { backgroundColor, color } from "../../constant/theme";

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${backgroundColor || "black"};
  color: ${color || "white"};
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
`;
