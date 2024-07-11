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
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Label = styled.p`
  margin-bottom: 12px;
  padding: 8px 0;
  border-top: 4px solid #000;
  text-align: center;
`;
