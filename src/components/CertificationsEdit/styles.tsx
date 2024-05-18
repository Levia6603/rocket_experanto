import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Certification = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;
export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 110px;
  min-width: 110px;
  min-height: 135px;
  padding: 1rem;
  & > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  & > div:nth-of-type(2) {
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
  min-width: 16px;
  min-height: 16px;
  border: 0;
  background-color: transparent;
  padding: 0;
  padding-bottom: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
  & > img {
    width: 16px;
    height: 16px;
  }
`;
