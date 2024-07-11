import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding-bottom: 2.25rem;
  font-weight: 900;
`;

export const SortWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1.75rem;
  & > p {
  }
  & > select {
    width: 100%;
    min-width: 10rem;
    max-width: 10rem;
    max-height: 2rem;
    min-height: 2rem;
    background-color: transparent;
    padding: 0.5rem;
    border: 1px solid #616161;
    border-radius: 4px;
    color: #616161;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 1.75rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1320px;
  padding: 0.75rem;
  border: 1px solid #000;
  border-radius: 4px;
  transition: box-shadow 0.3s ease-in-out; /* 確保transition應用於box-shadow */

  &:hover {
    box-shadow: 4px 4px 0 #000;
  }

  //* 大頭貼
  & > div:nth-of-type(1) {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 999px;
    overflow: hidden;
    & > img {
      object-fit: cover;
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

    //* 發文標題
    & > h4 {
      font-weight: 700;
    }
    & > p {
      font-size: 1rem;
      color: #919191;
    }
  }

  //* 按鈕區
  & > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;
