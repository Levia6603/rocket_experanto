import { styled } from "styled-components";
import Button from "../../styles/Button";

export const Wrapper = styled.section`
  padding-top: 6rem;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
  & > div:nth-of-type(1) {
    width: 100%;
  }
  & > div:nth-of-type(2) {
    width: 100%;
  }
`;

export const Title = styled.h4`
  width: 100%;
  font-weight: 700;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  padding: 32px;
  border-bottom: 1px solid #616161;

  //* 大頭貼區
  & > div:nth-child(1) {
    width: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    //頭項
    & > div {
      & > img {
      }
    }
    & > p {
      font-size: 14px;
      color: #616161;
    }
  }

  //* 內容區
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    //* 標題
    & > div:nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      & > h5 {
        font-weight: bold;
        padding-right: 12px;
      }
      & > div {
      }
    }
    & > p {
      color: #616161;
    }
  }
`;

export const WriteMessage = styled.div`
  width: 626px;
  min-height: 219px;
  border: 1px solid #616161;
  border-radius: 4px;
  padding: 0.5rem 1rem;

  & > h6 {
    font-weight: 700;
    padding-bottom: 0.5rem;
  }

  & > textarea {
    width: 100%;
    min-height: 118px;
    padding: 12px 17px;
  }
  & > ${Button} {
    width: 110px;
    height: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 4px;

    margin-top: 1.5rem;
  }
`;
