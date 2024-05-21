import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Wrapper, Container, Dashboard } from "./profileStyle";
import ProfileBox from "../../components/ProfileBox";
import SlidingMatching from "../../components/SlidingMatching";

function Profile() {
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
        <SlidingMatching />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Profile;
