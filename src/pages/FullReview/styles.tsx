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
  padding-bottom: 2rem;
  font-weight: 900;
`;

export const Subject = styled.div`
  border: 1px solid #616161;
  border-radius: 1rem;

  //* 文章主旨 + 發文時間
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem;
    border-bottom: 3px solid #616161;
    & > h4 {
      font-weight: 900;
    }
    & > p {
      color: #616161;
    }
  }
  //* 教學規劃 + 大頭貼 + 名字
  & > div:nth-child(2) {
    display: flex;
    border: 1px solid #616161;
    border-radius: 8px;
    margin: 0.5rem;
    //* 大頭貼 + 名字
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 1rem;
      //* 大頭貼
      & > div {
        display: flex;
        justify-content: center;
        & > img {
        }
      }
      //* 名字
      & > p {
        color: #616161;
        font-weight: 900;
      }
    }

    //* 教學規劃
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 1rem;
      & > p {
        color: #616161;
        padding-bottom: 1rem;
      }
      & > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > li {
          & > p {
          }
        }
      }
    }
  }
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  border: 1px solid #616161;
  border-radius: 8px;
  & > h2 {
    font-weight: 900;
    padding-bottom: 1.5rem;
  }
`;

//* 一個人的評價card
export const Review = styled.div`
  //* 大頭貼 + 名字
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    //* 大頭貼
    & > div {
      display: flex;
      justify-content: center;
      & > img {
      }
    }
    //* 名字
    & > p {
      color: #616161;
      font-weight: 900;
    }
  }
  //* 具體評價內容
  & > div:nth-child(5) {
    padding-left: 1rem;
    padding-top: 0.5rem;
    //* 標題
    & > p:nth-of-type(1) {
      font-weight: 900;
    }
    //* 內容
    & > p:nth-of-type(2) {
      color: #616161;
      padding-top: 0.5rem;
      padding-left: 1rem;
    }
  }
`;

//* 一項條目
export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  & > p {
    font-weight: 900;
  }
  & > ul {
    display: flex;
    gap: 0.5rem;
    padding-left: 1rem;
    & > li {
      & > img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
