import styled from "styled-components";
import { keyframes, css } from "styled-components";

interface OptionProps {
  readonly $index: number;
  readonly $isOpen: boolean;
}

export const Wrapper = styled.section`
  padding: 40px 0;
`;
export const Container = styled.div`
  display: flex;
  gap: 25px;
  max-width: 1320px;
  padding: 0 12px;
  margin: 0 auto;
`;
export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 32px;
  padding: 32px;
  border: 1px solid #616161;
  border-radius: 4px;
`;
export const ProfileMenu = styled.div`
  width: 306px;
  height: 10px;
  border: 1px solid #616161;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  img {
    width: 80px;
  }
  h1 {
    margin-right: 24px;
    font-size: 24px;
    font-weight: 900;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    li {
      padding: 6px 0;
    }
    h3 {
      color: #9e9e9e;
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  padding: 6px 12px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const Box = styled.div`
  align-self: stretch;
  h2 {
    font-size: 24px;
    font-weight: 900;
  }
  hr {
    border: 0.5px solid #9e9e9e;
  }
`;
export const Select = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 227px;
  padding: 14px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  color: #888484;
  cursor: pointer;
`;

export const Option = styled.div<OptionProps>`
  ${({ $isOpen }) =>
    $isOpen === false &&
    css`
      display: none;
    `}
  position: absolute;
  overflow: hidden;
  top: 55px;
  left: -1px;
  width: 227px;
  border: 1px solid #848484;
  border-radius: 4px;
  background-color: #fff;
  animation: ${({ $index }) => showOption($index)} 0.3s ease-in;
  li {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 12px;
    &:hover {
      background-color: #cecece;
    }
  }
`;
const showOption = (index: number) => keyframes`
    from{
        height: 0;
    }
    to{
        height: ${index * 50}px;
    }
`;
