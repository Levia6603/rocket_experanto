import {
  ProfileEditSection,
  Photo,
  PhotoChangeButton,
  Form,
  PersonalInfo,
  PersonalInfoSelect,
  LanguageSection,
  LanguageBtn,
  Card,
  CardItem,
  AddItemBtn,
  DeleteItemBtn,
  AddCardBtn,
  CertificationsSection,
  CertificationCard,
  CancelBtn,
  SaveBtn,
} from "./styles";
import closeIcon from "/close-lg.svg";
import deleteCircle from "/delete-circle.svg";
import avatar from "/nav-profile.png";
import addSquare from "/add-square.svg";
import addCircle from "/add-circle-lg.svg";
import noCertification_sm from "/no-certification-sm.svg";
import saveBlack from "/save-black.svg";
import saveWhite from "/save-white.svg";

const ProfileEdit = () => {
  return (
    <>
      <ProfileEditSection title="個人資料編輯區主外框">
        <Form title="個人資料編輯區" action="submit">
          <Photo title="照片編輯區">
            <div>
              <img src={avatar} alt="" />
            </div>
            <PhotoChangeButton>
              <img src={saveBlack} alt="" />
              <p>Change Photo</p>
            </PhotoChangeButton>
          </Photo>
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
                  currentValue="New York"
                  setValue={() => {
                    console.log("set");
                  }}
                  languageList={["New York", "Los Angeles"]}
                ></PersonalInfoSelect>
              </label>
            </PersonalInfo>
          </div>
          <LanguageSection title="編輯語言區">
            <h4>Language</h4>
            <p>Create language (最多 5 個)</p>
            <div>
              <Card>
                <div>
                  <img src={closeIcon} alt="" />
                </div>
                <label>
                  <LanguageBtn>English</LanguageBtn>
                </label>
                <div>
                  <CardItem>
                    <p>1. </p>
                    <textarea placeholder="請輸入您的學習目標"></textarea>
                    <DeleteItemBtn>
                      <img src={deleteCircle} alt="" />
                    </DeleteItemBtn>
                  </CardItem>
                  <CardItem>
                    <p>2. </p>
                    <textarea placeholder="請輸入您的學習目標"></textarea>
                    <DeleteItemBtn>
                      <img src={deleteCircle} alt="" />
                    </DeleteItemBtn>
                  </CardItem>
                </div>
                <div>
                  <AddItemBtn>
                    <img src={addSquare} alt="" />
                  </AddItemBtn>
                </div>
              </Card>
              <div className="addCard">
                <AddCardBtn>
                  <img src={addCircle} alt="" />
                </AddCardBtn>
              </div>
            </div>
          </LanguageSection>
          <CertificationsSection>
            <h4>Certifications</h4>
            <div>
              <CertificationCard>
                <div>
                  <img src={noCertification_sm} alt="" />
                </div>
                <div>
                  <input type="text" placeholder="請輸入圖檔標題" />
                </div>
              </CertificationCard>
            </div>
            <div>
              <AddCardBtn>
                <img src={addCircle} alt="" />
              </AddCardBtn>
            </div>
          </CertificationsSection>
          <div title="整張表單按鈕區">
            <CancelBtn>
              <p>Cancel</p>
            </CancelBtn>
            <SaveBtn>
              <img src={saveWhite} alt="" />
              <p>Save</p>
            </SaveBtn>
          </div>
        </Form>
      </ProfileEditSection>
    </>
  );
};

export default ProfileEdit;
