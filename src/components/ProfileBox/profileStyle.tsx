import { styled } from "styled-components";

export const ProfileBox = styled.div`
  width: 306px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;

  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 2rem 0;
    & > div {
      & > img {
        width: 80px;
        height: 80px;
      }
    }
    & > h5 {
      margin-top: 0.5rem;
    }
    & > div {
      display: flex;
      gap: 4px;
      & > p {
        margin: 0;
        padding: 0;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
    & > ul {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      & > li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        padding: 12px 1rem;
        cursor: pointer;
        &:hover {
          background-color: #616161;
        }
        & > img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
`;
