import { styled } from "styled-components";
import Selector from "../../components/Selector";

export const Wrapper = styled.div`
  width: 100%;
`;

export const AreaSelector = styled(Selector)`
  width: 190px;
  height: 40px;
  background-color: transparent;
  & > p:nth-of-type(1) {
    width: fit-content;
    padding: 0.5rem;
  }
  & > div:nth-of-type(1) {
    width: 190px;
    & > ul {
      width: fit-content;
      & > li {
        width: fit-content;
        padding: 0.5rem;
      }
    }
  }
`;
