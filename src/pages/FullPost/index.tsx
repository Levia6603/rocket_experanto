import { Header, Container, Info, Calendar, Needs } from "./styles";
import Schedule from "../../components/Schedule";
import avatar from "/avatar-80.svg";
import star from "/profile_box_icons/star-black.png";
import like from "/profile_box_icons/heart.svg";

function FullPost() {
  return (
    <>
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
      </Container>
    </>
  );
}

export default FullPost;
