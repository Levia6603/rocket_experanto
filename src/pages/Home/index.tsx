import { Outlet } from "react-router-dom";
import { Wrapper, Container, Dashboard, RightSection } from "./styles";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProfileBox from "../../components/ProfileBox";
import LanguageFilter from "../../components/LanguageFilter";
import SlidingPost from "../../components/SlidingPost";

function Home() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Dashboard>
            <Outlet />
          </Dashboard>
          <RightSection>
            <ProfileBox />
            <LanguageFilter />
          </RightSection>
          <SlidingPost />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
