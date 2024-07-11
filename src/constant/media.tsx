import { css } from "styled-components";

const media = {
  tablet: (...args: Parameters<typeof css>) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args: Parameters<typeof css>) => css`
    @media (max-width: 1440px) {
      ${css(...args)}
    }
  `,
};

export default media;
