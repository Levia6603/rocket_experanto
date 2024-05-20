import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
  & > div:nth-of-type(1) {
    width: 100%;
  }
  & > div:nth-of-type(2) {
    width: 100%;
  }
`;

export const Title = styled.h4`
  width: 100%;
  font-weight: 700;
`;
