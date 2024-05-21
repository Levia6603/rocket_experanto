import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import {
  Wrapper,
  Container,
  Header,
  Certifications,
  CloseBtn,
  ControlBar,
  ButtonPairWrapper,
} from "./styles";
import { Calendar, Needs, Plans } from "../../pages/FullPost/styles";
import Schedule from "../Schedule";
import close from "/close-lg.svg";
import avatar from "/avatar-80.svg";
import location from "/map-pin.svg";

function SlidingMatching() {
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
        </ControlBar>

        <Container>
          <Header>
            <div>
              <img src={avatar} alt="Avatar" />
            </div>

            <div>
              <div>
                <h2>Ella Dowson</h2>
              </div>
              <div>
                <div>
                  <img src={location} alt="Location" />
                </div>
                <p>Kaohsiung</p>
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
          <ButtonPairWrapper
            left="拒絕"
            right="同意"
            backgroundColorLeft="white"
            backgroundColorRight="black"
          />
        </Container>
      </Wrapper>
    </>
  );
}

export default SlidingMatching;
