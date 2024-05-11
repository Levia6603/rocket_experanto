import { styled } from "styled-components";
import Button from "../../components/Button";
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
  border: 0;
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

export const Fluent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
  & > div {
    & > ul {
      display: flex;
      gap: 10px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  & > label {
    & > p {
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 8px;
    }
  }
`;
