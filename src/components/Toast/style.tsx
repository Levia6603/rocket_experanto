import styled, { keyframes } from "styled-components";

interface FrameProps {
  readonly $isShow: boolean;
}

const countDown = keyframes`
    from{
        width: 300px;
    }
    to{
        width: 0px;
    }
`;
const show = keyframes`
    from{
        transform: translateX(-450px);
    }
    to{
        transform: translateX(0);
    }
`;
const disappear = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-450px);
    }
`;

export const Frame = styled.div<FrameProps>`
  position: fixed;
  left: 20px;
  top: 100px;
  overflow: hidden;
  z-index: 5;
  width: 300px;
  height: 80px;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  background-color: #fff;
  animation: ${({ $isShow }) => ($isShow ? show : disappear)} 0.6s ease-in;
  p {
    margin: 24px 16px;
  }
`;

export const ProcessBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 4px;
  padding: 0;
  background-color: #ffce26;
  animation: ${countDown} 5s linear;
`;
