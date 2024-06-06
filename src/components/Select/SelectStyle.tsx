import styled, { keyframes } from "styled-components";

interface SelectProps {
  readonly $width: string;
  readonly $length: number;
}

export const Label = styled.label<SelectProps>`
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ $width }) => $width};
  padding: 8px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  cursor: pointer;
  input {
    display: none;
  }
  ul {
    position: absolute;
    left: 0;
    top: 40px;
    display: none;
    flex-direction: column;
    overflow-x: scroll;
    z-index: 1;
    width: 100%;
    max-height: 200px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    background-color: #fff;
    animation: ${({ $length }) => showOption($length)} 0.3s ease-in;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  li {
    user-select: none;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 42px;
    padding: 0 16px;
    color: #454545;
  }
  li:hover {
    background-color: #f0eded;
  }
  img {
    position: absolute;
    right: 12px;
  }
  input:checked ~ ul {
    display: flex;
  }
  input:checked ~ img {
    transform: rotate(180deg);
    transition: all 0.3s;
  }
`;
const showOption = (index: number) => keyframes`
    from{
        height: 0;
    }
    to{
        height: ${index <= 5 ? index * 40 : 200}px;
    }
`;
