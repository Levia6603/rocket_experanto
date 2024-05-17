import { styled } from "styled-components";

interface WrapperProps {
  $isVisible: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  right: ${({ $isVisible }) => ($isVisible ? "0" : "-100%")};
  transition: right 0.5s ease-in-out;
`;

export const Container = styled.div``;

export const Header = styled.div``;

export const Info = styled.div``;

export const Certifications = styled.div``;
