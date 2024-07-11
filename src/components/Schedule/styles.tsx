import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
`;

export const Container = styled.div`
  //* 星期
  & > div {
    width: 100%;
    & > ul {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-bottom: 0.5rem;
      gap: 0.5rem;
    }
  }

  //* 時間
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > div {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 20px;
      & > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        & > li {
          width: 80px;
        }
      }
    }
  }
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  min-width: 80px;
  min-height: 40px;
  border-top: 4px solid #616161;
  margin: 0 auto;
  padding: 8px 31.5px;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Period = styled.button`
  width: 66.5px;
  height: 95px;
  border: 1px solid #616161;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
  &:focus {
    background-color: #bdbdbd;
  }
`;
