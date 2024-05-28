import { useNavigate } from "react-router-dom";
import { Container, Photo, Menu } from "./profileStyle";
import star from "/profile_box_icons/star-black.png";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux";

function ProfileBox() {
  const user = useSelector((state: RootStateType) => state.user.user);
  const { avatar, name } = user;
  console.log(user);

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Photo>
          <div>
            <img src={avatar} alt="" />
          </div>
          <h5>{name}</h5>
          <div>
            <div>
              <p>Taipei</p>
              <p>Area</p>
            </div>
            <div>
              <div>
                <img src={star} alt="" />
                <p>
                  5.0 <span> (1)</span>
                </p>
              </div>
              <p>Reviews</p>
            </div>
          </div>
        </Photo>
        <Menu>
          <ul>
            <li onClick={() => navigate("/user/profile/index")}>
              <img src="/profile_box_icons/person.svg" alt="" />
              <p>個人資料</p>
            </li>
            <li onClick={() => navigate("/user/notifications")}>
              <img src="/profile_box_icons/bell.svg" alt="" />
              <div>
                <p>訊息通知</p>
                <div>
                  <p>1</p>
                </div>
              </div>
            </li>
            <li onClick={() => navigate("/user/waiting_list")}>
              <img src="/profile_box_icons/list-check.svg" alt="" />
              <p>已發申請</p>
            </li>
            <li>
              <img src="/profile_box_icons/heart.svg" alt="" />
              <p>我的收藏</p>
            </li>
            <li onClick={() => navigate("/user/exchanging/:id")}>
              <img src="/profile_box_icons/friends.svg" alt="" />
              <p>現在進行式</p>
            </li>
            <li onClick={() => navigate("/user/matching")}>
              <img src="/profile_box_icons/cup-hot.svg" alt="" />
              <p>等待配對</p>
            </li>
            <li onClick={() => navigate("/user/full_review/:id")}>
              <img src="/profile_box_icons/trophy.svg" alt="" />
              <p>過去完成式</p>
            </li>
            <li>
              <img src="/profile_box_icons/box-arrow-in-right.svg" alt="" />
              <p>登出</p>
            </li>
          </ul>
        </Menu>
      </Container>
    </>
  );
}

export default ProfileBox;
