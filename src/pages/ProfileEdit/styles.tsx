import styled from "styled-components";
import Button from "../../styles/Button";
import Select from "../../components/Select";

export const ProfileEditSection = styled.section`
  width: 100%;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  & > div {
    & > img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
    }
  }
`;
export const PhotoChangeButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4.5px;
  border: 1px solid #000;
  p {
    font-weight: 700;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1296px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  & > div {
    margin-top: 2rem;
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 2;
      border-bottom: 2px solid #5e5e5e;
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
    width: 50%;
    & > p {
      font-weight: 900;
      margin-bottom: 8px;
    }
  }
`;

export const Mark = styled.span`
  color: #ff5454;
`;

export const PersonalInfoSelect = styled(Select)`
  width: 447px;
`;

export const LanguageSection = styled.div`
  & > h2 {
    margin-bottom: 24px;
    line-height: 2;
    font-weight: bold;
    border-bottom: 2px solid #5e5e5e;
  }
  & > p {
    font-weight: bold;
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > label {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 8px;
  }
  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`; // card

export const CardItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 95%;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  & > p:nth-child(1) {
    display: block;
    position: absolute;
    top: -8px;
    width: 20px;
    background-color: #fff;
    text-align: center;
    line-height: 1;
  }
  & > textarea {
    width: 100%;
    margin-top: 4px;
    border: 0;
    font-size: 16px;
    outline: none;
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
  position: absolute;
  right: -5%;
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  & > img {
    width: 1rem;
    height: 1rem;
  }
`;

export const AddItemBtn = styled(Button)`
  width: 95%;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  p {
    color: #bdbdbd;
    font-size: 30px;
    font-weight: 100;
  }
`;
//帶圖片版本
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

interface AddCertBtnProps {
  $color?: string;
  $backgroundColor?: string;
}
export const AddCertBtn = styled.div<AddCertBtnProps>`
  width: fit-content;
  height: fit-content;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  color: ${({ $color }) => $color || "black"};
  border: 2px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 8px 16px;
  cursor: pointer;
`;

export const UploadImgBtn = styled(Button)`
  border: 0;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const CertificationsSection = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 2;
    border-bottom: 2px solid #454545;
  }
  & > div {
    display: flex;
    gap: 0.5rem;
    padding-top: 10px;
    & > label {
      & > input {
        display: none;
      }
    }
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
