import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  h2 {
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 700;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #5e5e5e;
  h3 {
    margin-bottom: 2px;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    color: #919191;
  }
`;

export const Card = styled.div`
  display: flex;
  margin: 16px;
  margin-bottom: 56px;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  background-color: #fff;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 96px;
    padding: 16px 8px;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      object-fit: cover;
    }
    p {
      font-size: 20px;
      font-weight: 700;
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 8px;
  }
`;

export const Rate = styled.div`
  margin: 24px 16px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      object-fit: cover;
    }
    h4 {
      font-size: 20px;
      font-weight: 700;
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 8px;
    h5 {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      margin-top: 8px;
      color: #454545;
    }
  }
`;

export const Stars = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 4px;
  padding: 0 16px;
`;
