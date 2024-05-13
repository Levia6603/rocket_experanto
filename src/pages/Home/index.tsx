import { Outlet } from "react-router-dom";
import { Wrapper, Container, Dashboard } from "./styles";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProfileBox from "../../components/ProfileBox";

function Home() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Dashboard>
            <Outlet />
          </Dashboard>
          <ProfileBox />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
