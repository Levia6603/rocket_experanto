import { styled } from "styled-components";
import { bakgroundColor } from "../../constant/theme";

export const Button = styled.button`
  background-color: ${bakgroundColor || "black"};
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
`;
