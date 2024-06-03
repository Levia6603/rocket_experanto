import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 94px;
    overflow-x: hidden;
  }
  li {
    padding: 5px 0;
    text-align: center;
    border: 1px solid #000;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #e2e2e2;
    }
  }
`;

export const Label = styled.p`
  margin-bottom: 12px;
  padding: 8px 0;
  border-top: 4px solid #000;
  text-align: center;
`;
