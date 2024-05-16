import { styled } from "styled-components";

export const LanguageFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  & > p {
    display: flex;
    background-color: #dbdbdb;
    font-weight: 900;
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & > ul {
  }
  & > input {
    display: flex;
    justify-content: start;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const FilterItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > input {
  }
  & > p {
  }
`;
