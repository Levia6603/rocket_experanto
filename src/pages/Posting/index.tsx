import { Wrapper, Container, Title } from "./styles";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function Posting() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Title>Posting</Title>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Posting;
