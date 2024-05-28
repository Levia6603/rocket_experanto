import { Container, Photo, Menu } from "./profileStyle";
import star from "/profile_box_icons/star-black.png";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux";

function ProfileBox() {
  const user = useSelector((state: RootStateType) => state.user.user);
  const { avatar, name } = user;
  console.log(user);

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
            <li>
              <img src="/profile_box_icons/person.svg" alt="" />
              <p>Profile</p>
            </li>
            <li>
              <img src="/profile_box_icons/bell.svg" alt="" />
              <div>
                <p>Notification</p>
                <div>
                  <p>1</p>
                </div>
              </div>
            </li>
            <li>
              <img src="/profile_box_icons/list-check.svg" alt="" />
              <p>Published Post</p>
            </li>
            <li>
              <img src="/profile_box_icons/heart.svg" alt="" />
              <p>Liked Post</p>
            </li>
            <li>
              <img src="/profile_box_icons/friends.svg" alt="" />
              <p>Proceeding</p>
            </li>
            <li>
              <img src="/profile_box_icons/cup-hot.svg" alt="" />
              <p>Awaiting</p>
            </li>
            <li>
              <img src="/profile_box_icons/trophy.svg" alt="" />
              <p>Completed</p>
            </li>
            <li>
              <img src="/profile_box_icons/box-arrow-in-right.svg" alt="" />
              <p>Log out</p>
            </li>
          </ul>
        </Menu>
      </Container>
    </>
  );
}

export default ProfileBox;
