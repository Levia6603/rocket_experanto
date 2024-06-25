import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from{
        transform: rotate3d(0);
    }
    to{
        transform: rotate3d(0,1,0,1080deg);
    }
`;
const dot = keyframes`
    0%{
        content: "";
    }
    25%{
        content: ".";
    }
    50%{
        content: "..";
    }
    75%{
        content: "...";
    }
    100%{
        content: "";
    }
`;

export const Wrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #5e5e5e66;
  backdrop-filter: blur(3px);
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 400px;
  height: 220px;
  border-radius: 4px;
  background-color: #fff;
  img {
    width: 100px;
    height: 100px;
    animation: ${spin} 2.5s ease-in-out infinite;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    &::after {
      content: "";
      animation: ${dot} 2s infinite;
    }
  }
`;
