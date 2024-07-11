import { Wrapper, Container, Image } from "./styles";
import errorImg from "/error.svg";
function ErrorPage() {
  return (
    <Wrapper>
      <Container>
        <Image>
          <img src={errorImg} alt="404" />
        </Image>
      </Container>
    </Wrapper>
  );
}

export default ErrorPage;
