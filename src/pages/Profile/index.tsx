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
  Select,
  Option,
} from "./profileStyle";
import avatar from "/nav-profile.png";
import arrowDown from "/chevron-down.png";

function Profile() {
  const [languageList, setLanguageList] = useState([
    "Chinese",
    "English",
    "Japanese",
    "Korean",
  ]);
  const [currentValue, setCurrentValue] = useState("Chinese");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
            </Box>
            <Box>
              <h2>Goal</h2>
              <hr />
              <Select onClick={toggle}>
                <p>{currentValue}</p>
                <img src={arrowDown} alt="" />
                <Option
                  $index={languageList.length}
                  $isOpen={isOpen}
                  onClick={toggle}
                >
                  <ul>
                    {languageList.map((el) => (
                      <li
                        key={el}
                        onClick={() => {
                          setCurrentValue(el);
                        }}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </Option>
              </Select>
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
