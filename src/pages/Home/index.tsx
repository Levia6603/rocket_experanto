import { Outlet } from "react-router-dom";
import { Wrapper, Container, Dashboard, RightSection } from "./styles";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProfileBox from "../../components/ProfileBox";
import LanguageFilter from "../../components/LanguageFilter";
import SlidingPost from "../../components/SlidingPost";

function Home() {
  const isToken = localStorage.getItem("token");

  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Dashboard>
            <Outlet />
          </Dashboard>
          <RightSection>
            {isToken && <ProfileBox />}
            <LanguageFilter />
          </RightSection>
        </Container>
        <SlidingPost />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
