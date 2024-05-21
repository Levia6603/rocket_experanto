import { Outlet } from "react-router-dom";
import { Wrapper, Container } from "./styles";

function SignUpEdit() {
  return (
    <>
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
}

export default SignUpEdit;
