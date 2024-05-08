import { useState } from "react";
import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";
import {
  Wrapper,
  Container,
  Dashboard,
  ProfileMenu,
  User,
  Button,
  Box,
  Board,
  Achiev,
  ProcessBar,
} from "./profileStyle";
import Selector from "../../components/Selector";
import avatar from "/nav-profile.png";
import badge from "/badge.png";

function Profile() {
  const languageList = ["Chinese", "English", "Japanese", "Korean"];
  const [currentValue, setCurrentValue] = useState({
    goal: "Select Language",
    plan: "Select Fluent Language",
  });
  const setGoal = (language: string) => {
    setCurrentValue((prev) => {
      return { ...prev, goal: language };
    });
  };
  const setPlan = (language: string) => {
    setCurrentValue((prev) => {
      return { ...prev, plan: language };
    });
  };
  return (
    <>
      <Nav />
      <Wrapper>
        <Container>
          <Dashboard>
            <User>
              <img src={avatar} alt="" />
              <div>
                <ul>
                  <li>
                    <h1>Jane Doe</h1>
                  </li>
                  <li>
                    <Button>Edit my detail</Button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>Female</p>
                    <h3>Gender</h3>
                  </li>
                  <li>
                    <p>Taiwan</p>
                    <h3>Country of residence</h3>
                  </li>
                  <li>
                    <p>4.5 (1)</p>
                    <h3>Reviews</h3>
                  </li>
                </ul>
              </div>
            </User>
            <Box>
              <h2>Achievements</h2>
              <hr />
              <Board>
                <Achiev>
                  <div>
                    <ul>
                      <li>
                        <h4>Complete</h4>
                        <p>Unranked</p>
                      </li>
                      <li>
                        <p>Lv.0</p>
                      </li>
                    </ul>
                    <ProcessBar $percent={10}></ProcessBar>
                  </div>
                  <img src={badge} alt="" />
                </Achiev>
                <Achiev>
                  <div>
                    <ul>
                      <li>
                        <h4>5 Star Review</h4>
                        <p>Unranked</p>
                      </li>
                      <li>
                        <p>Lv.0</p>
                      </li>
                    </ul>
                    <ProcessBar $percent={44}></ProcessBar>
                  </div>
                  <img src={badge} alt="" />
                </Achiev>
                <Achiev>
                  <div>
                    <ul>
                      <li>
                        <h4>Post</h4>
                        <p>Unranked</p>
                      </li>
                      <li>
                        <p>Lv.0</p>
                      </li>
                    </ul>
                    <ProcessBar $percent={20}></ProcessBar>
                  </div>
                  <img src={badge} alt="" />
                </Achiev>
              </Board>
            </Box>
            <Box>
              <h2>Goal</h2>
              <hr />
              <Selector
                size={"short"}
                languageList={languageList}
                currentValue={currentValue.goal}
                setValue={setGoal}
              />
            </Box>
            <Box>
              <h2>Fluent Language</h2>
              <hr />
            </Box>
            <Box>
              <h2>Learning Language</h2>
              <hr />
            </Box>
            <Box>
              <h2>Certified documents</h2>
              <hr />
            </Box>
            <Box>
              <h2>Fluent skill teaching plan</h2>
              <hr />
              <Selector
                size={"short"}
                languageList={languageList}
                currentValue={currentValue.plan}
                setValue={setPlan}
              />
            </Box>
          </Dashboard>
          <ProfileMenu />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Profile;
