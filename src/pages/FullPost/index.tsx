import {
  Wrapper,
  Header,
  Container,
  Info,
  Calendar,
  Needs,
  Plans,
  Certifications,
  Certification,
  Tags,
  Tag,
  Buttons,
  PostButton,
} from "./styles";
import Schedule from "../../components/Schedule";
import Comments from "../../components/Comments";
import avatar from "/avatar-80.svg";
import star from "/profile_box_icons/star-black.png";
import like from "/profile_box_icons/heart.svg";
import noCertification from "/no-certification-lg.svg";

function FullPost() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <div>
                <h4>Ella Dowson</h4>
                <p>Taipei</p>
              </div>
              <div>
                <div title="評價">
                  <div>
                    <img src={star} alt="stars" />
                  </div>
                  <p>
                    5.0 <span>(1)</span>
                  </p>
                </div>

                <div title="收藏">
                  <div>
                    <img src={like} alt="liked" />
                  </div>
                  <p>liked</p>
                </div>
              </div>
            </div>
          </Header>
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
                <h6>我想學：</h6>
                <p>Mandarin</p>
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
              <div>
                <h6>教學語言：</h6>
                <p>English</p>
              </div>

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
            <div>
              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
              <Certification>
                <img src={noCertification} alt="no certification" />
                <h6>托福</h6>
              </Certification>
            </div>
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
          <Buttons>
            <PostButton>回到上一頁</PostButton>
            <PostButton>申請</PostButton>
          </Buttons>
        </Container>
        <Comments />
      </Wrapper>
    </>
  );
}

export default FullPost;
