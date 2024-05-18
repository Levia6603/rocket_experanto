import { styled } from "styled-components";
import Selector from "../../components/Selector";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 1320px;
  padding: 0.5rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding-bottom: 2rem;
`;

export const SortWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  & > p {
  }
`;
export const Sort = styled(Selector)`
  width: 100%;
  min-width: 10rem;
  max-width: 10rem;
  max-height: 2rem;
  min-height: 2rem;
  background-color: transparent;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: 10rem;
    & > ul {
      width: 100%;
      & > li {
        width: 100%;
        padding: 0.5rem 1rem;
      }
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Item = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  //* 大頭貼
  & > div:nth-of-type(1) {
    & > img {
      width: 40px;
      height: 40px;
    }
  }
  //* 資料區
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2px;
    & > h5 {
      font-weight: 900;
    }
    & > p {
      color: #9e9e9e;
    }
  }

  //* 按鈕區
  & > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    & > div {
      & > button {
        font-size: 14px;
      }
    }
  }
`;
