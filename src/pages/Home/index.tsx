import { Wrapper, Container, Dashboard } from "./styles";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProfileBox from "../../components/ProfileBox";
import PostCard from "../../components/PostCard";
function Home() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Dashboard>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Dashboard>
          <ProfileBox />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
