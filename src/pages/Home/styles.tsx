import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding: 40px 0;
  overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  gap: 25px;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
  position: relative;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
`;

export const PostCards = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 32px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
