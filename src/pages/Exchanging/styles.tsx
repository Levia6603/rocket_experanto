import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 966px;
  h2 {
    margin-bottom: 36px;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #5e5e5e;
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    color: #919191;
    font-weight: 40;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 8px;
    img {
      width: 20px;
      height: 20px;
    }
    button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const CardAlbum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  padding: 12px;
`;

const card = css`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding: 0;
  border: 1px solid #5e5e5e;
  border-radius: 4px;
  background-color: #fcfcfccc;
  img {
    width: 70px;
    height: 70px;
    border: 1px solid #000;
    border-radius: 70px;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 180px;
    padding: 10px;
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  li {
    padding: 6px 12px;
  }
`;

export const CurrentCard = styled.div`
  ${card}

  &>div:nth-child(1) {
    background-color: #fff;
  }
`;

export const RemoteCard = styled.div`
  ${card}

  &>div:nth-child(1) {
    background-color: #ffefcb;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
