import PostCard from "../../components/PostCard";
import { PostCards } from "../Home/styles";
import PageBar from "../../components/PageBar";

function HomeIndex() {
  return (
    <>
      <PostCards>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCards>
      <PageBar />
    </>
  );
}

export default HomeIndex;
