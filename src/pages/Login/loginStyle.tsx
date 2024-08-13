import { styled } from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  max-width: 1296px;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 526px;
    height: 100vh;
    padding: 57px 0;
    border: 1px solid #000;
    background-color: #fff;
    h2 {
      font-size: 32px;
      font-weight: 700;
    }
  }
`;

export const Banner = styled.img`
  width: 770px;
  object-fit: contain;
`;

export const Logo = styled.img`
  width: 315px;
  margin-bottom: 52px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  p {
    color: #454545;
    font-size: 24px;
    font-weight: 700;
  }
  img {
    width: 32px;
  }
  &:hover {
    transition: all 0.3s;
    box-shadow: 4px 4px 0 #000;
  }
  &:active {
    transition: all 0s;
    box-shadow: 0 0 0;
  }
`;
