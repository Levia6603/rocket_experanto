import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WantedSection, WantedContainer, WantedBox } from "./wantedStyle";
import { ContinueButton } from "../Fluent/fluentStyle";
import BackButton from "../../components/BackButton";
import AddButton from "../../components/AddButton";
import Selector from "../../components/Selector";

export default function Wanted() {
  const navigate = useNavigate();

  //* 選擇語言
  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  const languageList = ["English", "Spanish", "French", "German", "Italian"];
  function handleSelect(el: string) {
    setSelectLanguage(el);
  }

  //* 選擇熟練度
  const defaultProficiency = "Select a level";
  const [proficiency, setProficiency] = useState(defaultProficiency);
  const [wantedLanguage, setWantedLanguage] = useState("");
  const proficiencyList = [
    `${wantedLanguage} - Beginner`,
    `${wantedLanguage} - Elementary`,
    `${wantedLanguage} - Intermediate`,
    `${wantedLanguage} - Up Intermediate`,
    `${wantedLanguage} - Advanced`,
  ];

  function handleProficiency(el: string) {
    setProficiency(el);
  }

  useEffect(() => {
    //*若選擇語言則更新熟練度
    if (selectLanguage !== defaultValue) {
      setWantedLanguage(selectLanguage);
      setProficiency(`${wantedLanguage} - Beginner`);
    }
  }, [selectLanguage, wantedLanguage]);

  return (
    <>
      <WantedSection>
        <WantedContainer>
          <WantedBox>
            <div>
              <BackButton onClick={() => navigate("/signup/fluent")}>
                <img src="/back-vector.png" alt="back" />
              </BackButton>
            </div>
            <img src="/logo-large.png" alt="experanto logo" />
            <div>
              <div className="question">
                <p className="subItem">
                  What’s the language you want to exchange?
                </p>
                <p>
                  You can choose up to 5 different study languages! You can
                  change this at any time.
                </p>
                <label>
                  <p>Wanted Language</p>
                  <Selector
                    size="middle"
                    languageList={languageList}
                    currentValue={selectLanguage}
                    setValue={handleSelect}
                  ></Selector>
                  <AddButton type="button">
                    <img src="/plus-circle.svg" alt="" />
                    <p>Add</p>
                  </AddButton>
                </label>
              </div>
              <div className="question">
                <p className="subItem">Level of proficiency</p>
                <p>
                  Select the language proficiency level you currently want to
                  learn, so other users can assist you in improving.
                </p>
                <label>
                  <p>Language proficiency</p>
                  <Selector
                    size="middle"
                    languageList={
                      proficiency === defaultProficiency && wantedLanguage
                        ? proficiencyList
                        : proficiencyList
                    }
                    currentValue={proficiency}
                    setValue={handleProficiency}
                  ></Selector>
                </label>
              </div>
            </div>

            <ContinueButton type="button" onClick={() => navigate("/profile")}>
              Finish
            </ContinueButton>
          </WantedBox>
        </WantedContainer>
      </WantedSection>
    </>
  );
}
