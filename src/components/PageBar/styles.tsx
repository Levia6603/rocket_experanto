import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Container = styled.div`
  height: 33px;
  display: flex;
  border-top: 1px solid #616161;
  border-bottom: 1px solid #616161;
  border-left: 1px solid #616161;
`;

export const PageButton = styled(Button)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  border: 0;
  border-right: 1px solid #616161;
  background-color: transparent;
  &:hover {
    background-color: #e0e0e0;
  }
`;
