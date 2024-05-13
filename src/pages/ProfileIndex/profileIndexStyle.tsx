import { styled } from "styled-components";

export const Title = styled.div`
  margin-top: 2rem;
  & > h4 {
    font-weight: 900;
    border-bottom: 1px solid #616161;
    padding-bottom: 20px;
  }
`;
export const Cards = styled.div`
  margin-top: 12px;
  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
export const Card = styled.div`
  max-width: 282px;
  max-height: 494px;
  min-width: 282px;
  min-height: 494px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 266px;
    height: 80px;
    background-color: #bdbdbd;
    border-radius: 4px;
    & > h6 {
      font-weight: 900;
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 10px;
  padding: 6px 12px;
  & > p:nth-child(1) {
    display: block;
    width: 20px;
  }
`;

export const CertificationsSection = styled.div`
  & > h4 {
    font-weight: bold;
    border-bottom: 1px solid #616161;
    padding-bottom: 20px;
  }

  & > ul {
    display: flex;
    gap: 0.5rem;
    padding-top: 20px;
  }
`;

export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.25rem;

  width: 136px;
  height: 134px;
  & > div:nth-child(1) {
    & > img {
      width: 78px;
      height: 78px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    & > h6 {
      padding: 0.5rem;
      font-weight: 900;
    }
  }
`;
