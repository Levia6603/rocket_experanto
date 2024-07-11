import { LanguageFilter, FilterItem } from "./styles";
import apiBase from "../../Api";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLanguageIds } from "../../../redux/pages/pagesSlice";
import { Skeleton } from "@mui/material";

type LanguageType = {
  Name: string;
  Count: number;
  LanguageId: number;
};

function LanguageFilterComponent() {
  //* 建立 dispatch 方法
  const dispatch = useDispatch();
  //* 存放接回來的熱門語言
  const [languageList, setLanguageList] = useState<LanguageType[]>([]);
  //* 存放選擇的熱門語言
  const [selectedLanguageIds, setSelectedLanguageIds] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  //*當語言被選擇時，加入到selectedLanguageIds，否則移除
  const handleCheckboxChange = (languageId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedLanguageIds((prevSelectedLanguageIds) => [
        ...prevSelectedLanguageIds,
        languageId,
      ]);
    } else {
      setSelectedLanguageIds((prevSelectedLanguageIds) =>
        prevSelectedLanguageIds.filter((id) => id !== languageId)
      );
    }
  };

  //* 取得熱門語言，並存入languageList，寫在useEffect內是為了避免重複請求
  useEffect(() => {
    async function getLanguageList() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      try {
        const languageList = await axios({
          method: "GET",
          url: `${apiBase.GET_HOT_LANGUAGE}`,
          headers: headers,
        })
          .then((res) => res.data.data)
          .catch((err) => console.log(err));
        setLanguageList(languageList);
      } catch (error) {
        console.error(error);
      }
    }
    getLanguageList();
    setIsLoading(false);
  }, []);

  //* 偵測selectedLanguageIds的變化，並把變化傳入redux
  useEffect(() => {
    dispatch(setLanguageIds(selectedLanguageIds));
  }, [dispatch, selectedLanguageIds]);

  return (
    <LanguageFilter>
      <p>熱門語言</p>
      <ul>
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <li key={index}>
                <FilterItem>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "1rem", width: "4rem" }}
                  />
                </FilterItem>
              </li>
            ))
          : languageList.map((language) => (
              <li key={language.LanguageId} id={language.LanguageId.toString()}>
                <FilterItem>
                  <input
                    type="checkbox"
                    checked={selectedLanguageIds.includes(language.LanguageId)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        language.LanguageId,
                        e.target.checked
                      )
                    }
                  />
                  <p>
                    {language.Name} <span>({language.Count})</span>
                  </p>
                </FilterItem>
              </li>
            ))}
      </ul>
    </LanguageFilter>
  );
}

export default LanguageFilterComponent;
