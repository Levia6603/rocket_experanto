import {
  ProfileEditSection,
  Photo,
  PhotoChangeButton,
  Form,
  PersonalInfo,
  PersonalInfoSelect,
  LanguageSection,
  Card,
  CardItem,
  AddItemBtn,
  DeleteItemBtn,
  AddCardBtn,
  CertificationsSection,
  CertificationCard,
  CancelBtn,
  SaveBtn,
  AddCertBtn,
} from "./styles";
import closeIcon from "/close-lg.svg";
import deleteCircle from "/delete-circle.svg";
import avatar from "/nav-profile.png";
import addSquare from "/add-square.svg";
import addCircle from "/add-circle-lg.svg";
import noCertification_sm from "/no-certification-sm.svg";
import saveBlack from "/save-black.svg";
import saveWhite from "/save-white.svg";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import axios from "axios";
import apiBase from "../../Api";

type LanguageList = { id: number; Name: string }[];
type PlanList = { language: string; plans: string[] }[];

const ProfileEdit = () => {
  const [languageList, setLanguageList] = useState<LanguageList>([]);
  const [planList, setPlanList] = useState<PlanList>([
    { language: "", plans: [""] },
  ]);

  async function getList() {
    const list: LanguageList = await axios
      .get(apiBase.GET_LANGUAGE_LIST)
      .then((res) => res.data.data);
    setLanguageList(list);
  }

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    console.log(planList);
  }, [planList]);
  return (
    <>
      <ProfileEditSection>
        <Form action="submit">
          <Photo>
            <div>
              <img src={avatar} alt="" />
            </div>
            <PhotoChangeButton>
              <img src={saveBlack} alt="" />
              <p>Change Photo</p>
            </PhotoChangeButton>
          </Photo>
          <div>
            <h4>Edit Profile</h4>
            <PersonalInfo>
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
          <LanguageSection>
            <h4>Language</h4>
            <p>Create language (最多 5 個)</p>
            <div>
              {planList.map((obj, index) => {
                const { language, plans } = obj;
                return (
                  <Card key={index}>
                    <div>
                      <img
                        src={closeIcon}
                        alt=""
                        onClick={() => {
                          let newList = [...planList];
                          newList = newList.filter((_, i) => i !== index);
                          setPlanList(newList);
                        }}
                      />
                    </div>
                    <label>
                      <Select
                        list={languageList}
                        currentValue={language || "請選擇語言"}
                        setValue={(el: string) => {
                          let newList = [...planList];
                          newList[index].language = el;
                          setPlanList(newList);
                        }}
                      />
                    </label>
                    <div>
                      {plans.map((el, i) => (
                        <CardItem key={i}>
                          <p>{i + 1} </p>
                          <textarea
                            placeholder="請輸入您的學習目標"
                            value={el}
                            onChange={(e) => {
                              let newList = [...planList];
                              newList[index].plans[i] = e.target.value;
                              setPlanList(newList);
                            }}
                          ></textarea>
                          <DeleteItemBtn type="button">
                            <img
                              src={deleteCircle}
                              alt=""
                              onClick={() => {
                                let newList = [...planList];
                                newList[index].plans = newList[
                                  index
                                ].plans.filter(
                                  (_, planIndex) => planIndex !== i
                                );
                                setPlanList(newList);
                              }}
                            />
                          </DeleteItemBtn>
                        </CardItem>
                      ))}
                    </div>
                    <div>
                      <AddItemBtn type="button">
                        <img
                          src={addSquare}
                          alt=""
                          onClick={() => {
                            let newList = [...planList];
                            newList[index].plans.push("");
                            setPlanList(newList);
                          }}
                        />
                      </AddItemBtn>
                    </div>
                  </Card>
                );
              })}
              <div className="addCard">
                <AddCardBtn type="button">
                  <img
                    src={addCircle}
                    alt=""
                    onClick={() => {
                      if (planList.length >= 6) return;
                      let newList = [...planList];
                      newList.push({ language: "", plans: [""] });
                      setPlanList(newList);
                    }}
                  />
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
              </CertificationCard>
            </div>
            <div>
              <AddCertBtn type="button" $color="" $backgroundColor="">
                新增檔案
              </AddCertBtn>
            </div>
          </CertificationsSection>
          <div>
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
