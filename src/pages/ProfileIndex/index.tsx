import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiBase from "../../Api";
import {
  Achiev,
  Card,
  Certification,
  Container,
  ProcessBar,
  User,
} from "./style";
import { Btn } from "../../styles/Btn";
import star from "/profile_box_icons/star-yellow.svg";
import badge1 from "/achivement_1.svg";
import badge2 from "/achivement_2.svg";
import badge3 from "/achivement_3.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import { RootStateType } from "../../../redux";
import Loading from "../../components/Loading";

export type ProfileType = {
  Code: number;
  Status: string | boolean;
  message: string;
  ScoreCount: number;
  Score: number;
  avatar: string;
  gender: string;
  gendersId: number;
  image: string[];
  location: string;
  locationsId: number;
  name: string;
  skills: { language: string; languageId: number; goal: string[] }[];
};
const ProfileIndex = () => {
  const defauleProfile: ProfileType = {
    Code: 0,
    Status: "",
    message: "",
    ScoreCount: 0,
    Score: 0,
    avatar: "",
    gender: "",
    gendersId: 0,
    image: [],
    location: "",
    locationsId: 0,
    name: "",
    skills: [],
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(defauleProfile);
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );
  //* 取得個人資料
  async function getProfile() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    dispatch(setLoading(true));
    const profile = await axios
      .get(apiBase.GET_PROFILE, {
        headers,
      })
      .then((res) => res.data);
    if (profile?.Message === "請重新登入") {
      alert("登入逾時，請重新登入");
      navigate("/login");
    }
    profile.Status && setProfile(profile);

    dispatch(setLoading(false));
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {loadingState && <Loading />}
      {!loadingState && profile && (
        <Container>
          <User>
            <img src={profile?.avatar} alt="" />
            <ul>
              <li>
                <h3>{profile?.name}</h3>
                <Btn
                  $style="outline"
                  type="button"
                  onClick={() => {
                    navigate("/user/profile/edit");
                  }}
                >
                  編輯個人資料
                </Btn>
              </li>
              <li>
                <div>
                  <h4>{profile?.gender}</h4>
                  <p>性別</p>
                </div>
                <div>
                  <h4>{profile?.location}</h4>
                  <p>縣市區域</p>
                </div>
                <div>
                  <h4>
                    <img src={star} alt="" />
                    {profile?.Score} ({profile?.ScoreCount})
                  </h4>
                  <p>評價</p>
                </div>
              </li>
            </ul>
          </User>
          <h2>個人成就</h2>
          <div>
            <Achiev>
              <div>
                <ul>
                  <li>
                    <h4>貼文數</h4>
                    <p>未排名</p>
                  </li>
                  <li>
                    <p>Lv.0</p>
                  </li>
                </ul>
                <ProcessBar $percent={10} />
              </div>
              <img src={badge1} alt="badge" />
            </Achiev>
            <Achiev>
              <div>
                <ul>
                  <li>
                    <h4>交換完成</h4>
                    <p>未排名</p>
                  </li>
                  <li>
                    <p>Lv.0</p>
                  </li>
                </ul>
                <ProcessBar $percent={10} />
              </div>
              <img src={badge2} alt="badge" />
            </Achiev>
            <Achiev>
              <div>
                <ul>
                  <li>
                    <h4>5星好評</h4>
                    <p>未排名</p>
                  </li>
                  <li>
                    <p>Lv.0</p>
                  </li>
                </ul>
                <ProcessBar $percent={10} />
              </div>
              <img src={badge3} alt="badge" />
            </Achiev>
          </div>
          <h2>擅長語言</h2>
          <div>
            {profile.skills &&
              profile?.skills.map((obj, i) => (
                <Card key={i}>
                  <div>
                    <h5>{obj.language}</h5>
                  </div>
                  <ul>
                    {obj?.goal.map((el, index) => (
                      <li key={index}>
                        {index + 1}. {el}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
          </div>
          <h2>語言證書檔案</h2>
          <Certification>
            {profile?.image.map((el, i) => (
              <img key={i} src={el} alt="certification" />
            ))}
          </Certification>
        </Container>
      )}
    </>
  );
};
export default ProfileIndex;
