import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 900;
  padding-bottom: 2.25rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1.75rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  background-color: #e2e2e2;

  & > h4 {
    font-weight: 700;
    color: #ababab;
    flex-grow: 1;
  }

  & > p {
    color: #ababab;
  }
`;
