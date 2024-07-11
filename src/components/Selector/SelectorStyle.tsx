import styled from "styled-components";
import { keyframes, css } from "styled-components";

interface SelectProps {
  readonly $size: string;
  readonly $isOpen: boolean;
}

interface OptionProps {
  readonly $size: string;
  readonly $index: number;
  readonly $isOpen: boolean;
}

export const Select = styled.div<SelectProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ $size }) =>
    $size === "short" ? "227px" : $size === "middle" ? "596px" : "706px"};
  padding: 14px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  color: #888484;
  cursor: pointer;
  img {
    ${({ $isOpen }) =>
      $isOpen === true &&
      css`
        transform: rotate(-180deg);
      `}
    transition: all 0.3s;
  }
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
  width: ${({ $size }) =>
    $size === "short" ? "227px" : $size === "middle" ? "596px" : "706px"};
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
