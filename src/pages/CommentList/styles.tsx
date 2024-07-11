import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 966px;
  margin: 0 auto;
  padding: 0 12px;
`;

export const Title = styled.h2`
  font-weight: 900;
  margin-bottom: 36px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    color: #919191;
    font-size: 16px;
  }
`;
