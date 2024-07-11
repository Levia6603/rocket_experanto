import { styled } from "styled-components";

export const LanguageFilter = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 0;
  & > p {
    display: flex;
    background-color: #5e5e5e;
    color: white;
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  & > ul {
    background-color: white;
    padding: 0.75rem;
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
    & > span {
      color: #a8acab;
    }
  }
`;
