import styled from "styled-components";

interface processProps {
  $percent: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 966px;
  padding: 32px;
  border-radius: 4px;
  background-color: #fff;
  h2 {
    margin-top: 32px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    border-bottom: 2px solid #5e5e5e;
  }
  & > div:nth-child(3) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & > div:nth-child(5) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  & > img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    object-fit: cover;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  li {
    display: flex;
    gap: 16px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
  h4 {
    font-size: 16px;
    & > img {
      width: 14px;
      height: 14px;
    }
  }
  p {
    font-size: 14px;
    color: #95b1ae;
  }
  div {
    padding: 0 8px;
  }
`;

export const Achiev = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 287px;
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: #9e9e9e;
    }
  }
  li {
    &:nth-child(2) {
      padding: 8px 12px;
      border-radius: 8px;
      background-color: #f1f1f1;
      p {
        color: #000;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;

export const ProcessBar = styled.div<processProps>`
  position: relative;
  width: 220px;
  height: 8px;
  box-shadow: inset 0 0 4px #bbbbbb;
  background-color: #d3d3d3;
  border-radius: 8px;
  &::before {
    content: "";
    position: absolute;
    width: ${({ $percent }) => (200 / 100) * $percent}px;
    height: 8px;
    border-radius: 8px;
    background-color: #ffce26;
  }
`;

export const Card = styled.div`
  overflow: hidden;
  display: flex;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 284px;
    background-color: #f1f1f1;
    h5 {
      color: #454545;
      font-size: 40px;
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding: 4px;
  }
  li {
    padding: 6px 12px;
  }
`;

export const Certification = styled.div`
  display: flex;
  gap: 12px;
  img {
    width: 140px;
    height: 140px;
    border: 1px solid #5e5e5e;
    border-radius: 4px;
    object-fit: cover;
  }
`;
