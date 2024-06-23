import { Container, Frame, Wrapper } from "./style";
import logo from "/logo_large.svg";

function Loading() {
  return (
    <Wrapper>
      <Container>
        <Frame>
          <img src={logo} alt="" />
          <p>LOADING</p>
        </Frame>
      </Container>
    </Wrapper>
  );
}

export default Loading;
