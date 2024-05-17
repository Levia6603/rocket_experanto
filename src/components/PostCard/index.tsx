import { useState } from "react";
import { Wrapper, Header, Content, HashTagSection, HashTag } from "./styles";
import avatar from "/nav-profile.png";
import liked from "/profile_box_icons/heart.svg";
function PostCard() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  console.log(isVisible);
  return (
    <Wrapper onClick={handleClick}>
      <Header>
        <div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <h6>Lorem ipsum dolor sit.</h6>
        </div>
        <div>
          <img src={liked} alt="liked" />
        </div>
      </Header>
      <Content>
        <div>
          <div>
            <h6>Title</h6>
          </div>
          <p>Looking for someone who's fluent in Mandarin</p>
        </div>
        <div>
          <div>
            <h6>Fluent</h6>
          </div>
          <p>English</p>
        </div>
        <div>
          <div>
            <h6>Looking for</h6>
          </div>
          <p>Mandarin</p>
        </div>
        <div>
          <div>
            <h6>Goals</h6>
          </div>
          <p>
            I want to learn Chinese because I'm interested in Chinese culture
            and language. By learning Chinese, I hope to better understand
            China's history, art, and humanities, as well as to communicate with
            more people....
          </p>
        </div>
      </Content>
      <HashTagSection>
        <HashTag>
          <p>#English</p>
        </HashTag>
        <HashTag>
          <p>#Mandarin</p>
        </HashTag>
        <HashTag>
          <p>+1</p>
        </HashTag>
      </HashTagSection>
    </Wrapper>
  );
}
export default PostCard;
