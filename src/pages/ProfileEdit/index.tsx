import {
  ProfileEditSection,
  Photo,
  Form,
  PersonalInfo,
  LanguageSection,
  Card,
  CardItem,
  AddItemBtn,
  DeleteItemBtn,
  CertificationsSection,
  CertificationCard,
  AddCertBtn,
  Mark,
} from "./styles";
import closeIcon from "/close-lg.svg";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase, { headers } from "../../Api";
import { getList } from "../../Api";
import { Btn } from "../../styles/Btn";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import {
  setToastText,
  toggleToast,
} from "../../../redux/toastState/toastStateSlice";
import { RootStateType } from "../../../redux";
import Loading from "../../components/Loading";

export type apiList = { Id: number; Name: string }[];
type PlanList = { languageId: number; GoalsContent: string[] }[];
type FormData = {
  GendersId: number;
  LocationsId: number;
  LanguageGoalList: { languageId: number; GoalsContent: string[] }[];
  Images: string[];
};

const ProfileEdit = () => {
  const avatar = localStorage.getItem("avatar");
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );
  //* 語言清單
  const [languageList, setLanguageList] = useState<apiList>([]);
  //* 設定教學計劃列表
  const [planList, setPlanList] = useState<PlanList>([
    { languageId: 0, GoalsContent: [""] },
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
  const dispatch = useDispatch();

  //* 改為使用一支函式套用至所有取得列表的部分

  //* POST資料庫
  async function postData(formData: FormData) {
    try {
      await axios({
        method: "POST",
        url: apiBase.POST_PROFILE,
        data: formData,
        headers: headers,
      }).finally(() => {
        dispatch(setLoading(false));
      });
      navigate("/home/index");
      dispatch(toggleToast());
      dispatch(setToastText("編輯成功"));
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  }

  //* 打API
  useEffect(() => {
    getList(apiBase.GET_LANGUAGE_LIST, setLanguageList);
    getList(apiBase.GET_GENDER_LIST, setGenderList);
    getList(apiBase.GET_LOCATION_LIST, setLocationList);
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
      if (files.length > 6) {
        alert("最多只能上傳 6 張照片");
        return;
      }
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
          postData(formData);
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
      {loadingState && <Loading />}
      <ProfileEditSection>
        <Form onSubmit={handleSubmit}>
          <Photo>
            <div>
              <img src={avatar || ""} alt="" />
            </div>
            <Btn $style={"outline"} type="button">
              更改大頭照
            </Btn>
          </Photo>
          <div>
            <h2>編輯個人資料</h2>
            <PersonalInfo>
              <label>
                <p>性別</p>
                <Select
                  width={"100%"}
                  list={genderList}
                  currentValue={selectedGender.Name || "請選擇性別"}
                  setValue={setSelectedGender}
                ></Select>
              </label>
              <label>
                <p>
                  縣市區域 <Mark>*</Mark>
                </p>
                <Select
                  width={"100%"}
                  list={locationList}
                  currentValue={selectedLocation.Name || "請選擇地區"}
                  setValue={setSelectedLocation}
                ></Select>
              </label>
            </PersonalInfo>
          </div>
          <LanguageSection>
            <h2>編輯語言</h2>
            <p>
              擅長語言 (最多 6 個) <Mark>*</Mark>
            </p>
            <div>
              {planList.map((obj, index) => {
                const { languageId, GoalsContent } = obj;
                return (
                  <Card key={index}>
                    <div>
                      <h3>擅長語言 {index + 1}</h3>
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
                      <p>
                        選擇擅長語言 <Mark>*</Mark>
                      </p>
                      <Select
                        width={"95%"}
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
                      <p>
                        填寫教學計畫 <Mark>*</Mark>
                      </p>
                      {GoalsContent.map((el, i) => (
                        <CardItem key={i}>
                          <p> {i + 1} </p>
                          <textarea
                            placeholder="請輸入您的學習目標"
                            value={el}
                            onChange={(e) => {
                              const newList = [...planList];
                              newList[index].GoalsContent[i] = e.target.value;
                              setPlanList(newList);
                            }}
                          />
                          <DeleteItemBtn type="button">
                            <img
                              src={closeIcon}
                              alt=""
                              onClick={() => {
                                const newList = [...planList];
                                newList[index].GoalsContent = newList[
                                  index
                                ].GoalsContent.filter(
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
                        <p
                          onClick={() => {
                            if (GoalsContent.length >= 6) {
                              alert("最多 6 個目標");
                              return;
                            }
                            const newList = [...planList];
                            newList[index].GoalsContent.push("");
                            setPlanList(newList);
                          }}
                        >
                          +
                        </p>
                      </AddItemBtn>
                    </div>
                  </Card>
                );
              })}
              {planList.length < 6 ? (
                <Btn
                  $style="outline"
                  type="button"
                  onClick={() => {
                    if (planList.length >= 6) {
                      alert("最多 6 個語言");
                      return;
                    }
                    const newList = [...planList];
                    newList.push({ languageId: 0, GoalsContent: [""] });
                    setPlanList(newList);
                  }}
                >
                  新增
                </Btn>
              ) : (
                <Btn $style="disable" type="button">
                  新增
                </Btn>
              )}
            </div>
          </LanguageSection>
          <CertificationsSection title="證書上傳區">
            <h2>語言證書檔案</h2>
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
              {isLoading ? (
                "Uploading..."
              ) : (
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
                  <p>最多上傳六張圖片</p>
                </label>
              )}
            </div>
          </CertificationsSection>
          <div>
            <Btn $style="disable" type="button">
              取消編輯
            </Btn>
            <Btn
              $style="primary"
              type="submit"
              onClick={() => {
                dispatch(setLoading(true));
              }}
            >
              儲存變更
            </Btn>
          </div>
        </Form>
      </ProfileEditSection>
    </>
  );
};

export default ProfileEdit;
