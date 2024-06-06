import { styled } from "styled-components";

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
  background-color: #fff;
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
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    //頭項
    & > div {
      margin-top: 8px;
      & > img {
        width: 76px;
        height: 76px;
        border: 1px solid #000;
        border-radius: 76px;
        object-fit: cover;
      }
    }
    & > p {
      font-size: 14px;
      color: #919191;
    }
  }

  //* 內容區
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    width: 100%;
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
      img {
        cursor: pointer;
      }
    }
    & > p {
      display: block;
      max-width: 568px;
      color: #616161;
    }
  }
`;

export const WriteMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 626px;
  min-height: 219px;
  border-radius: 4px;
  padding: 0.5rem 1rem;

  & > h6 {
    font-weight: 700;
    padding-bottom: 0.5rem;
    align-self: flex-start;
  }

  & > textarea {
    width: 100%;
    max-width: 100%;
    min-height: 118px;
    margin-bottom: 12px;
    padding: 12px 17px;
    border: 1px solid #ababab;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
`;
