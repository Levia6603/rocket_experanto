import { useState } from "react";
import { Wrapper, Container, Header, Info, Certifications } from "./styles";
import { Calendar, Needs, Plans, Tags, Tag } from "../../pages/FullPost/styles";
import Schedule from "../Schedule";

function SlidingPost() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Wrapper $isVisible={isVisible} onClick={handleClick}>
        <Container>
          <Header></Header>
          <Info>
            <div>
              <h4>你好</h4>
            </div>
            <div>
              <div>
                <p>posted time</p>
                <p>2024/05/01</p>
              </div>
              <div>
                <p>Duration</p>
                <p>2024/05/01 - 2024/05/01</p>
              </div>
              <div>
                <p>Location</p>
                <p>Taipei</p>
              </div>
            </div>
          </Info>
          <Calendar>
            <div>
              <h6>Available Time</h6>
            </div>
            <div>
              <Schedule />
            </div>
          </Calendar>
          <Needs>
            <div>
              <h6>Needs</h6>
            </div>
            <div>
              <div>
                <h6>我會說：</h6>
                <p>English</p>
              </div>
              <div>
                <h6>我想學：</h6>
                <p>English</p>
              </div>
              <div>
                <h6>我希望可以：</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  non exercitationem voluptate tempore distinctio delectus rerum
                  commodi, magni eveniet laboriosam?
                </p>
              </div>
            </div>
          </Needs>
          <Plans>
            <div>
              <h6>你可以學到：</h6>
            </div>
            <div>
              <p>教學計畫：</p>
              <div>
                <p>
                  <span>1. </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Beatae earum placeat alias quasi a dolores
                  fugiat optio sint qui ea.
                </p>
                <p>
                  <span>2. </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Beatae earum placeat alias quasi a dolores
                  fugiat optio sint qui ea.
                </p>
                <p>
                  <span>3. </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Beatae earum placeat alias quasi a dolores
                  fugiat optio sint qui ea.
                </p>
                <p>
                  <span>4. </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Beatae earum placeat alias quasi a dolores
                  fugiat optio sint qui ea.
                </p>
              </div>
            </div>
          </Plans>
          <Certifications>
            <div>
              <h6>證書</h6>
            </div>
            <div></div>
          </Certifications>
          <Tags>
            <div>
              <h6># Tags</h6>
            </div>
            <div>
              <Tag>#English</Tag>
              <Tag>#English</Tag>
              <Tag>#English</Tag>
              <Tag>#English</Tag>
              <Tag>#English</Tag>
            </div>
          </Tags>
        </Container>
      </Wrapper>
    </>
  );
}

export default SlidingPost;
