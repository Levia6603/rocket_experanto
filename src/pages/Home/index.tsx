import { Outlet } from "react-router-dom";
import { Wrapper, Container, Dashboard, RightSection } from "./styles";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProfileBox from "../../components/ProfileBox";
import LanguageFilter from "../../components/LanguageFilter";
import SlidingPost from "../../components/SlidingPost";
import axios from "axios";
import apiBase from "../../Api";
import { useEffect, useState } from "react";
import { PostInterface } from "../FullPost";

function Home() {
  const [post, setPost] = useState({} as PostInterface);
  const [tags, setTags] = useState(String);
  const [tagAry, setTagAry] = useState([] as string[]);
  //* 接回 Post List
  async function getPost(id: number) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const post: PostInterface = await axios({
        method: "GET",
        url: `${apiBase.GET_POST}/${id}`,
        headers: headers,
      })
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setPost(post);
      setTags(post.tags || "");
      console.log(post);
    } catch (error) {
      console.error(error);
    }
  }

  //*接回 Post List
  useEffect(() => {
    getPost(2);
  }, []);

  useEffect(() => {
    const tagList = tags.split(",");
    setTagAry(tagList);
  }, [tags]);

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
        </Container>
        <SlidingPost post={post} tags={tags} tagAry={tagAry} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
