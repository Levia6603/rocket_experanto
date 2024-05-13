import {
  User,
  Button,
  Box,
  Board,
  Achiev,
  ProcessBar,
} from "../Profile/profileStyle";

import avatar from "/nav-profile.png";
import badge from "/badge.png";
const ProfileIndex = () => {
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
    </>
  );
};
export default ProfileIndex;
