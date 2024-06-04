import styled, { css } from "styled-components";

interface BtnProps {
  readonly $style: string;
}

//hover樣式變化
const hover = css`
  &:hover {
    box-shadow: 4px 4px 0 #000;
    transition: all 0.3s;
  }
  &:active {
    box-shadow: 0 0 0;
    transition: all 0s;
  }
`;

const outline = css`
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
  ${hover}
`;

const primary = css`
  border: 1px solid #ffce26;
  background-color: #ffce26;
  color: #000;
  ${hover}
`;

const secondary = css`
  border: 1px solid #919191;
  background-color: #919191;
  color: #fff;
  ${hover}
`;

const disable = css`
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  color: #bdbdbd;
  cursor: not-allowed;
`;

export const Btn = styled.button<BtnProps>`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  //根據傳進來的字串更動為對應樣式（參照上方）
  ${({ $style }) => {
    switch ($style) {
      case "outline":
        return outline;
      case "primary":
        return primary;
      case "secondary":
        return secondary;
      case "disable":
        return disable;
    }
  }}
`;
