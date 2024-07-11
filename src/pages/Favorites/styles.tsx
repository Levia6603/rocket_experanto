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

export const CardWrapper = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #fcfcfccc;
  border: 1px solid #5e5e5e;
  gap: 10px;
  //* 大頭貼
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
    & > div:nth-of-type(1) {
      & > img {
        width: 20px;
        height: 20px;
      }
    }
    & > div:nth-of-type(2) {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      & > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    & > h4 {
      font-weight: 700;
    }
    & > p {
      color: #9e9e9e;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    & > div:nth-of-type(1) {
      & > img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
