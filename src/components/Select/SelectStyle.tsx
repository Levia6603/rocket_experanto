import styled, { keyframes } from "styled-components";

interface SelectProps {
  readonly $width: number;
  readonly $length: number;
}

export const Label = styled.label<SelectProps>`
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ $width }) => $width}px;
  padding: 14px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  cursor: pointer;
  input {
    display: none;
  }
  ul {
    position: absolute;
    left: 0;
    top: 54px;
    display: none;
    flex-direction: column;
    overflow-x: scroll;
    width: 100%;
    max-width: 250px;
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
    width: 100%;
    height: 50px;
    padding: 0 12px;
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
        height: ${index <= 5 ? index * 50 : 250}px;
    }
`;
