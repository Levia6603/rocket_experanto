import { Styled } from "./profileStyle";
import avatar from "/nav-profile.png";

function ProfileBox() {
  return (
    <>
      <Styled>
        <div>
          <div>
            <img src={avatar} alt="" />
          </div>
          <h5>Jane Doe</h5>
          <div>
            <p>FLuent language:</p>
            <p>English</p>
          </div>
          <div>
            <p>Wanted language:</p>
            <p>Mandarin</p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src="/profile_box_icons/person.svg" alt="" />
              <p>Profile</p>
            </li>
            <li>
              <img src="/profile_box_icons/bell.svg" alt="" />
              <div>
                <p>Notification</p>
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
        </div>
      </Styled>
    </>
  );
}

export default ProfileBox;
