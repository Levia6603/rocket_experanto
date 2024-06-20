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

interface AddCertBtnProps {
  $color?: string;
  $backgroundColor?: string;
}
export const AddCertBtn = styled.div<AddCertBtnProps>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  color: ${({ $color }) => $color || "black"};
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 12px 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 0 #000;
    transition: all 0.3s;
  }
  &:active {
    box-shadow: 0 0 0;
    transition: all 0s;
  }
`;

export const CertificationsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 2;
    border-bottom: 2px solid #454545;
  }
  //* 卡片預覧區
  & > div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  //* 新增卡片區
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 200px;
    border: 1px solid #5e5e5e;
    border-radius: 4px;

    //* 新增圖片鈕
    & > label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;

      & > input {
        display: none;
      }

      & > p {
        font-size: 1rem;
        font-weight: 700;
        color: #454545;
        cursor: pointer;
      }
    }
  }
`;

//* 證書卡片
export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 184px;
  max-height: 216px;
  padding: 1rem;
  border: 1px solid #5e5e5e;
  border-radius: 4px;

  //* 剛除按鈕
  & > div:nth-child(1) {
    display: flex;
    justify-content: end;
    width: 100%;
    & > img {
      width: 15px;
      height: 15px;
    }
  }
  //* 檔案預覧處
  & > div:nth-child(2) {
    padding: 0.5rem;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    & > img {
      max-width: 152px;
      max-height: 152px;
      border: 0;
    }
  }
`;
