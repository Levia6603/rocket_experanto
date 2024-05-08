import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 36px 0;
`;
export const Container = styled.div`
  font-family: sans-serif;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12.5px;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 240px;
  margin-bottom: 30px;
  div {
    display: flex;
    gap: 24px;
    ul {
      width: 234px;
      h6 {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
      }
      li {
        line-height: 1.5;
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
  img {
    width: 160px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 8px;
  }
  p {
    color: #bdbdbd;
  }
`;
