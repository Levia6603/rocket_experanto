import {
  ProfileEditSection,
  Photo,
  PhotoChangeButton,
  Form,
  PersonalInfo,
  PersonalInfoSelect,
  Fluent,
} from "./profileEditStyle";
import FluentLanguageBtn from "../../styles/FluentLanguageButton";
import avatar from "/nav-profile.png";
const ProfileEdit = () => {
  return (
    <>
      <ProfileEditSection title="個人資料編輯區主外框">
        <Photo title="照片編輯區">
          <div>
            <img src={avatar} alt="" />
          </div>
          <PhotoChangeButton>change photo</PhotoChangeButton>
        </Photo>
        <Form title="個人資料編輯區" action="submit">
          <div title="主要編輯表單區">
            <h4>Edit Profile</h4>
            <PersonalInfo title="編輯姓別地區">
              <label htmlFor="">
                <p>Gender</p>
                <PersonalInfoSelect
                  size="small"
                  currentValue="Male"
                  setValue={() => {
                    console.log("set");
                  }}
                  languageList={["Male", "Female"]}
                ></PersonalInfoSelect>
              </label>
              <label htmlFor="">
                <p>Location</p>
                <PersonalInfoSelect
                  size="small"
                  currentValue="Male"
                  setValue={() => {
                    console.log("set");
                  }}
                  languageList={["Male", "Female"]}
                ></PersonalInfoSelect>
              </label>
            </PersonalInfo>
            <Fluent title="流利語言編輯區">
              <p>Edit Language</p>
              <div>
                <p>Fluent Language</p>
                <ul>
                  <li>
                    <FluentLanguageBtn title="English"></FluentLanguageBtn>
                  </li>
                  <li>
                    <div>
                      <FluentLanguageBtn title="French"></FluentLanguageBtn>
                    </div>
                  </li>
                </ul>
                <div title="新增語言區，沒用到的時候隱藏" hidden>
                  <div title="新增語言">
                    <p>New Fluent Language</p>
                    <select name="" id=""></select>
                  </div>
                  <div title="新增goal，新增一個就增加一個">
                    <p>Your teaching goals</p>
                    <div>
                      <input type="text" />
                      <button>Add</button>
                      <button>delete</button>
                    </div>
                  </div>
                  <div title="按鈕區">
                    <button type="button">Cancel</button>
                    <button type="submit">Save</button>
                  </div>
                </div>
                <button type="button">Add</button>
              </div>
            </Fluent>
            <div title="想要學習的語言編輯區">
              <h5>Wanted Language</h5>
              <ul title="語言選擇區">
                <li>
                  <button>Japanese</button>
                </li>
                <li>
                  <button>Korean</button>
                </li>
              </ul>
              <div title="新增想要語言編輯區，沒用到的時候隱藏" hidden>
                <label htmlFor="">
                  <p>New Wanted Language</p>
                  <select name="" id=""></select>
                </label>
                <label htmlFor="">
                  <p>Select language proficiency</p>
                  <select name="" id=""></select>
                </label>
                <label htmlFor="">
                  <p>your teaching goals</p>
                  <input type="text" />
                </label>
                <div title="按鈕區">
                  <button type="button">Cancel</button>
                  <button type="submit">Save</button>
                </div>
              </div>
            </div>
            <div title="上傳證書區">
              <h6>Upload Certificates</h6>
              <div>
                <p>Upload files</p>
                <input type="file" />
              </div>
            </div>
          </div>
          <div title="整張表單按鈕區">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </Form>
      </ProfileEditSection>
    </>
  );
};

export default ProfileEdit;
