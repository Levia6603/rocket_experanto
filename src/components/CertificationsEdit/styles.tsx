import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Certification = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  & > h6 {
    font-weight: bold;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 0.5rem;
  }
`;
export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 110px;
  min-width: 110px;
  min-height: 135px;
  padding: 1rem;
  & > div {
    border-radius: 4px;
    overflow: hidden;
    & > img {
      width: 78px;
      height: 78px;
    }
  }
`;
export const DeleteButton = styled(Button)`
  display: flex;
  justify-content: end;
  min-width: 16px;
  min-height: 16px;
  border: 0;
  background-color: transparent;
  padding: 0;
  padding-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
  & > img {
    width: 16px;
    height: 16px;
  }
`;
