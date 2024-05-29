import {
  ProfileEditSection,
  Photo,
  PhotoChangeButton,
  Form,
  PersonalInfo,
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
  UploadImgBtn,
} from "./styles";
import closeIcon from "/close-lg.svg";
import deleteCircle from "/delete-circle.svg";
import avatar from "/nav-profile.png";
import addSquare from "/add-square.svg";
import addCircle from "/add-circle-lg.svg";
import saveBlack from "/save-black.svg";
import saveWhite from "/save-white.svg";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";

type apiList = { Id: number; Name: string }[];
type PlanList = { languageId: number; plans: string[] }[];
type FormData = {
  GendersId: number;
  LocationsId: number;
  LanguageGoalList: { languageId: number; plans: string[] }[];
  Images: string[];
};

const ProfileEdit = () => {
  //* 語言清單
  const [languageList, setLanguageList] = useState<apiList>([]);
  //* 設定教學計劃列表
  const [planList, setPlanList] = useState<PlanList>([
    { languageId: 0, plans: [""] },
  ]);

  //* 設定地區
  const [locationList, setLocationList] = useState<apiList>([]);
  const [selectedLocation, setSelectedLocation] = useState({ Id: 0, Name: "" });
  //* 設定性別
  const [genderList, setGenderList] = useState<apiList>([]);
  const [selectedGender, setSelectedGender] = useState({ Id: 0, Name: "" });

  //* 設定照片
  const [imageURLs, setImageURLs] = useState<string[] | null | void>([]);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  //* 改為使用一支函式套用至所有取得列表的部分
  async function getList(
    apiUrl: string,
    setList: (value: React.SetStateAction<apiList>) => void
  ) {
    const list: apiList = await axios.get(apiUrl).then((res) => res.data.data);
    setList(list);
  }

  //* POST資料庫
  async function postData(formData: FormData) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      await axios({
        method: "POST",
        url: apiBase.POST_PROFILE,
        data: formData,
        headers: headers,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      console.log("Profile saved successfully");
      console.log(formData);
      navigate("/user/profile");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  }

  // //* 取得地區列表
  // async function getLocationList() {
  //   const list: LanguageList = await axios
  //     .get(apiBase.GET_LOCATION_LIST)
  //     .then((res) => res.data.data);
  //   setLocationList(list);
  // }

  // //* 取得性別列表
  // async function getGenderList() {
  //   const list: GenderList = await axios
  //     .get(apiBase.GET_GENDER_LIST)
  //     .then((res) => res.data.data);
  //   setGenderList(list);
  // }

  //* 打API
  useEffect(() => {
    getList(apiBase.GET_LANGUAGE_LIST, setLanguageList);
    getList(apiBase.GET_GENDER_LIST, setGenderList);
    getList(apiBase.GET_LOCATION_LIST, setLocationList);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
  }, []);

  //* 設定照片，因為它會是一個陣列，所以類別要使用File[]，單張照片則是File
  const [images, setImages] = useState<File[] | null>(null);
  //* 設定照片預覽，同理，它會是一個陣列，所以類別要使用string[]
  const [imagePreviews, setImagePreviews] = useState<string[] | null>(null);
  //* 設定是否還在上傳中
  const [isLoading, setIsLoading] = useState(false);
  //* 從.env引入upload_preset
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  //* 把cloud_name設定成變數
  const cloud_name = "deqjubczi";

  //* 設定照片產生預覽
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
      setImagePreviews(files.map((file) => URL.createObjectURL(file))); //* 產生預覽照片，比較意外的是這邊的迴圈是要在setImagePreviews裡面，我一開始以為是用迴圈包住它。
    }
  };

  //* 刪除照片，第一個是刪除預覽，第二個是刪除照片
  const handleDeleteImage = (index: number) => {
    if (imagePreviews) {
      setImagePreviews(imagePreviews.filter((_, i) => i !== index));
    }
    if (images) {
      setImages(images.filter((_, i) => i !== index));
    }
  };

  //* 上傳圖片到 Cloudinary、取得網址、建立表單
  const uploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //* 防止表單送出
    setIsLoading(true); //* 開始上傳的提示，透過改成true，讓按鈕消失，直到上傳完成後按鈕才回來

    /* 這邊是雙層的if判斷式，第一個判斷是判斷images裡面是否為空值，若不是空值的話，則進入下一個階段，
    用 Promise.all 來取得所有圖片的網址，申間上傳的過程和單張一樣，只是因為 Promise.all 的關係，使用迴圈讓每張圖片都會上傳，會等到全部完成後才傳回值 */
    try {
      if (images) {
        const imageURLs = await Promise.all(
          images.map(async (image) => {
            if (
              image.type === "image/png" ||
              image.type === "image/jpeg" ||
              image.type === "image/jpg" ||
              image.type === "image/svg+xml"
            ) {
              const img = new FormData(); //* 產生一個 FormData 物件，並加入img, cloud_name, upload_preset，接著用 fetch 上傳檔案，再把網址接回來
              img.append("file", image);
              img.append("cloud_name", cloud_name);
              img.append("upload_preset", upload_preset);
              const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloud_name}/upload`,
                {
                  method: "post",
                  body: img,
                }
              );
              const imgData = await response.json();
              return imgData.secure_url;
            }
            return "";
          })
        );

        setImageURLs(imageURLs); //* 使用useState把接回來的網址存起來，這樣即使是在外部也可以取用
        setImagePreviews([]);
        setIsLoading(false);

        const formData = {
          GendersId: selectedGender.Id, // 根據實際表單數據替換
          LocationsId: selectedLocation.Id, // 根據實際表單數據替換
          LanguageGoalList: planList,
          Images: imageURLs || [],
        };

        try {
          setFormData({ ...formData, imageURLs: imageURLs || [] });
          await postData(formData);
          console.log("Profile saved successfully");
          console.log(formData);
          navigate("/user/profile");
        } catch (error) {
          console.error("Error saving profile:", error);
        }
      }
      console.log(imageURLs);
      console.log(formData);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  //* 送出整張表單
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadImage(e);
  };

  return (
    <>
      <ProfileEditSection>
        <Form onSubmit={handleSubmit}>
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
                <Select
                  width={447}
                  list={genderList}
                  currentValue={selectedGender.Name || "請選擇性別"}
                  setValue={setSelectedGender}
                ></Select>
              </label>
              <label htmlFor="">
                <p>Location</p>
                <Select
                  width={447}
                  list={locationList}
                  currentValue={selectedLocation.Name || "請選擇地區"}
                  setValue={setSelectedLocation}
                ></Select>
              </label>
            </PersonalInfo>
          </div>
          <LanguageSection>
            <h4>Language</h4>
            <p>Create language (最多 6 個)</p>
            <div>
              {planList.map((obj, index) => {
                const { languageId, plans } = obj;
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
                        width={264}
                        list={languageList}
                        currentValue={
                          languageId
                            ? languageList[languageId - 1].Name
                            : "請選擇語言"
                        }
                        setValue={(el: { Id: number; Name: string }) => {
                          const newList = [...planList];
                          newList[index].languageId = el.Id; //顯示的語言名稱
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
                              const newList = [...planList];
                              newList[index].plans[i] = e.target.value;
                              setPlanList(newList);
                            }}
                          ></textarea>
                          <DeleteItemBtn type="button">
                            <img
                              src={deleteCircle}
                              alt=""
                              onClick={() => {
                                const newList = [...planList];
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
                            if (plans.length >= 6) {
                              alert("最多 6 個目標");
                              return;
                            }
                            const newList = [...planList];
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
                      if (planList.length >= 6) {
                        alert("最多 6 個語言");
                        return;
                      }
                      const newList = [...planList];
                      newList.push({ languageId: 0, plans: [""] });
                      setPlanList(newList);
                    }}
                  />
                </AddCardBtn>
              </div>
            </div>
          </LanguageSection>
          <CertificationsSection title="證書上傳區">
            <h4>Certifications</h4>
            <div>
              {imagePreviews?.map((preview, index) => (
                <CertificationCard key={index}>
                  <div>
                    <img
                      src={closeIcon}
                      alt=""
                      onClick={() => handleDeleteImage(index)}
                    />
                  </div>
                  <div>
                    <img src={preview} alt={`image-${index}`} />
                  </div>
                </CertificationCard>
              ))}
            </div>
            <div>
              <label>
                <AddCertBtn $color="" $backgroundColor="">
                  新增檔案
                </AddCertBtn>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                  multiple
                />
              </label>
            </div>

            <p>
              {isLoading ? (
                "Uploading..."
              ) : (
                <UploadImgBtn type="button">上傳圖片</UploadImgBtn>
              )}
            </p>
          </CertificationsSection>
          <div>
            <CancelBtn>
              <p>Cancel</p>
            </CancelBtn>
            <SaveBtn type="submit">
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
