import { styled } from "styled-components";
import Button from "../../styles/Button";
import Selector from "../../components/Selector";

export const ProfileEditSection = styled.section`
  width: 100%;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > div {
    & > img {
      width: 80px;
      height: 80px;
    }
  }
`;
export const PhotoChangeButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4.5px;
  border: 0;
  & > img {
    width: 12px;
    height: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    margin-top: 2rem;
    & > h4 {
      font-weight: 900;
      border-bottom: 1px solid #616161;
      padding-bottom: 10px;
    }
  }
  & > div:nth-child(5) {
    display: flex;
    gap: 1.5rem;
    justify-content: end;
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
  & > label {
    & > p {
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 8px;
    }
  }
`;

export const PersonalInfoSelect = styled(Selector)`
  width: 447px;
`;

export const LanguageSection = styled.div`
  & > h4 {
    font-weight: bold;
    border-bottom: 1px solid #616161;
  }
  & > p {
    font-weight: bold;
  }

  & > div:nth-child(3) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem 0;
    & > .addCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 518px;
    }
  }
`;

export const Card = styled.div`
  min-width: 282px;
  min-height: 518px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem 0.25rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  & > div:nth-child(1) {
    display: flex;
    justify-content: end;
  }
  & > label {
    display: flex;
    justify-content: center;
  }
  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 4px;
    gap: 10px;
  }
  & > div:nth-child(4) {
    display: flex;
    justify-content: center;
    padding: 10px 4px;
  }
`; // card

export const CardItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;

  & > p:nth-child(1) {
    display: block;
    width: 20px;
  }
  & > textarea {
    max-width: 191px;
    border: 0;
  }
  & > button:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const LanguageBtn = styled(Button)`
  font-size: 20px;
  padding: 1.5rem 100px;
  background-color: #bdbdbd;
  border: 0;
  border-radius: 4px;
`;
export const DeleteItemBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  & > img {
    width: 1rem;
    height: 1rem;
  }
`;

export const AddItemBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  & > img {
    width: 2rem;
    height: 2rem;
  }
`;

export const AddCardBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  & > img {
    width: 40px;
    height: 40px;
  }
`;

export const CertificationsSection = styled.div`
  & > h4 {
    font-weight: bold;
    border-bottom: 1px solid #616161;
  }
  & > div {
    display: flex;
    gap: 0.5rem;
    padding-top: 10px;
  }
`;

export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.25rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  width: 136px;
  height: 134px;
  & > div:nth-child(1) {
    & > img {
      width: 78px;
      height: 78px;
    }
  }
  & > div:nth-child(2) {
    padding: 0.5rem;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    & > input {
      max-width: 112px;
      max-height: 24px;
      border: 0;
    }
  }
`;

export const CancelBtn = styled(Button)`
  border: 1px solid black;
  background-color: transparent;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const SaveBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: black;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  &:hover {
    background-color: #dbdbdb;
    color: black;
  }
  & > img {
    width: 12px;
    height: 12px;
  }
`;
