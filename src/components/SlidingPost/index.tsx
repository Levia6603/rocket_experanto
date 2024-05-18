import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStateType } from "../../../redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import {
  Wrapper,
  Container,
  Header,
  Certifications,
  CloseBtn,
  OpenBtn,
  ControlBar,
} from "./styles";
import { Calendar, Needs, Plans, Tags, Tag } from "../../pages/FullPost/styles";
import Schedule from "../Schedule";
import close from "/close-lg.svg";
import newPage from "/box-arrow-up-right.svg";
import avatar from "/avatar-80.svg";
import location from "/map-pin.svg";
import commments from "/message.svg";
import liked from "/profile_box_icons/heart.svg";

function SlidingPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootStateType) => state.sliding.slidingPostState
  );

  return (
    <>
      <Wrapper
        $isVisible={isVisible}
        onClick={() => {
          dispatch(setSlidingPostState());
        }}
      >
        <ControlBar>
          <CloseBtn>
            <img src={close} alt="close" />
          </CloseBtn>
          <OpenBtn onClick={() => navigate("/home/post")}>
            <p>觀看完整貼文</p>
            <img src={newPage} alt="Direct to full post" />
          </OpenBtn>
        </ControlBar>

        <Container>
          <Header>
            <div>
              <img src={avatar} alt="Avatar" />
            </div>

            <div>
              <div>
                <h2>Ella Dowson</h2>
                <div>
                  <img src={liked} alt="liked" />
                </div>
              </div>
              <div>
                <div>
                  <img src={location} alt="Location" />
                </div>
                <p>Kaohsiung</p>
              </div>
              <div>
                <div>
                  <img src={commments} alt="Comments" />
                </div>
                <p>
                  <span> 5 </span>
                  則留言
                </p>
              </div>
            </div>
          </Header>
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
