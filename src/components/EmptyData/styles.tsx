import styled from "styled-components";
import empty from "/emptyData.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  & > div {
    width: 966px;
    height: 601px;
    background-image: url(${empty});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
