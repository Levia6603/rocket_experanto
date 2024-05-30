import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  User,
  Button,
  Box,
  Board,
  Achiev,
  ProcessBar,
} from "../Profile/profileStyle";
import {
  Title,
  Cards,
  Card,
  CardItem,
  CertificationsSection,
  CertificationCard,
} from "../ProfileIndex/profileIndexStyle";

import axios from "axios";
import apiBase from "../../Api";
import avatar from "/nav-profile.png";
import badge from "/badge.png";
import noCertification_sm from "/no-certification-sm.svg";

const ProfileIndex = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  //* 取得個人資料
  async function getProfile() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const profile = await axios({
        method: "GET",
        url: apiBase.GET_PROFILE,
        headers: headers,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
      setProfile(profile);
      console.log("Profile loaded successfully");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <>
      <User>
        <img src={avatar} alt="" />
        <div>
          <ul>
            <li>
              <h1>Jane Doe</h1>
            </li>
            <li>
              <Button type="button" onClick={() => navigate("edit")}>
                Edit my detail
              </Button>
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
        <Title>
          <h4>Fluent Language</h4>
        </Title>
        <Cards>
          <ul>
            <li>
              <Card>
                <div>
                  <h5>English</h5>
                </div>
                <div>
                  <CardItem>
                    <p>1. </p>
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, at.
                    </h6>
                  </CardItem>
                  <CardItem>
                    <p>2. </p>
                    <h6>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, doloribus?
                    </h6>
                  </CardItem>
                </div>
              </Card>
            </li>
            <li>
              <Card>
                <div>
                  <h5>English</h5>
                </div>
                <div>
                  <CardItem>
                    <p>1. </p>
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, at.
                    </h6>
                  </CardItem>
                  <CardItem>
                    <p>2. </p>
                    <h6>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, doloribus?
                    </h6>
                  </CardItem>
                </div>
              </Card>
            </li>
          </ul>
        </Cards>
      </Box>

      <Box>
        <CertificationsSection>
          <h4>Certifications</h4>
          <ul>
            <li>
              <CertificationCard>
                <div>
                  <img src={noCertification_sm} alt="no certification" />
                </div>
                <div>
                  <h6>TOEFL</h6>
                </div>
              </CertificationCard>
            </li>
            <li>
              <CertificationCard>
                <div>
                  <img src={noCertification_sm} alt="no certification" />
                </div>
                <div>
                  <h6>TOEFL</h6>
                </div>
              </CertificationCard>
            </li>
          </ul>
        </CertificationsSection>
      </Box>
    </>
  );
};
export default ProfileIndex;
