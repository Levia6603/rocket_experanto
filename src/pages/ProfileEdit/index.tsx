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

type LanguageList = { id: number; Name: string }[];
type PlanList = { language: string; plans: string[] }[];

const ProfileEdit = () => {
  const [languageList, setLanguageList] = useState<LanguageList>([]);
  const [planList, setPlanList] = useState<PlanList>([
    { language: "", plans: [""] },
  ]);
  const [imageURLs, setImageURLs] = useState<string[] | null | void>([]); //* 設定照片網址
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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

  //* 上傳，這邊很重要！！！
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
          gender: "Male", // 根據實際表單數據替換
          location: "New York", // 根據實際表單數據替換
          languages: planList,
          imageURLs: imageURLs || [],
        };

        try {
          // await axios.post(apiBase.SAVE_PROFILE, formData); // 替換成實際的 API
          setFormData({ ...formData, imageURLs: imageURLs || [] });
          console.log("Profile saved successfully");
          console.log(formData);
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
            <SaveBtn type="submit" onClick={() => navigate("/user/profile")}>
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
