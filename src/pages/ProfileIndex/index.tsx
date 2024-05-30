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
import badge from "/badge.png";

type ProfileType = {
  avatar: string;
  gender: string;
  gendersId: number;
  image: string[];
  location: string;
  locationsId: number;
  name: string;
  skills: [{ language: string; languageId: number; goal: string[] }];
};
const ProfileIndex = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({} as ProfileType);
  //* 取得個人資料
  async function getProfile() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const profile: ProfileType = await axios({
        method: "GET",
        url: apiBase.GET_PROFILE,
        headers: headers,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
      setProfile(profile);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <User>
        <img src={profile?.avatar} alt="" />
        <div>
          <ul>
            <li>
              <h1>{profile?.name}</h1>
            </li>
            <li>
              <Button type="button" onClick={() => navigate("edit")}>
                編輯
              </Button>
            </li>
          </ul>
          <ul>
            <li>
              <p>{profile?.gender}</p>
              <h3>性別</h3>
            </li>
            <li>
              <p>{profile?.location}</p>
              <h3>所在堿市</h3>
            </li>
            <li>
              <p>4.5 (1)</p>
              <h3>評價</h3>
            </li>
          </ul>
        </div>
      </User>
      <Box>
        <h2>個人成就</h2>
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
          <h4>我可以提供</h4>
        </Title>
        <Cards>
          <ul>
            {profile.skills?.map((skill, index) => (
              <li key={index}>
                <Card>
                  <div>
                    <h5>{skill.language}</h5>
                  </div>
                  <div>
                    {skill?.goal.map((item, index) => (
                      <CardItem key={index}>
                        <p>{index + 1} </p>
                        <h6>{item}</h6>
                      </CardItem>
                    ))}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Cards>
      </Box>

      <Box>
        <CertificationsSection>
          <h4>資格證照</h4>
          <ul>
            {profile.image?.map((image, index) => (
              <li key={index}>
                <CertificationCard>
                  <div>
                    <img src={image} alt="證照" />
                  </div>
                </CertificationCard>
              </li>
            ))}
          </ul>
        </CertificationsSection>
      </Box>
    </>
  );
};
export default ProfileIndex;
