import styled, { css } from "styled-components";
import Button from "../../styles/Button";

interface PageProps {
  readonly $current: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
`;
export const Page = styled.div`
  height: 33px;
  margin-right: 24px;
  display: flex;
  align-self: flex-end;
  border: 1px solid #616161;
  border-radius: 0.25rem;
  overflow: hidden;
`;
const currentPage = css`
  background-color: #000;
  color: #fff;
`;
export const PageButton = styled(Button)<PageProps>`
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

  ${({ $current }) => $current && currentPage}
`;
