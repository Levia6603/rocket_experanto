import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  WantedSection,
  WantedContainer,
  WantedBox,
  CustomSelect,
} from "./wantedStyle";
import { ContinueButton } from "../Fluent/fluentStyle";
import BackButton from "../../components/BackButton";
import AddButton from "../../components/AddButton";

export default function Wanted() {
  const navigate = useNavigate();
  type Option = {
    value: string;
    label: string;
  };

  //* 選擇語言
  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  const options = [
    { value: "English", label: "English" },
    { value: "Mandarin", label: "Mandarin" },
    { value: "Japanese", label: "Japanese" },
  ];
  function handleSelect(item: Option) {
    setSelectLanguage(item.value);
  }

  //* 選擇熟練度
  const defaultProficiency = "Beginner";
  const [proficiency, setProficiency] = useState(defaultProficiency);
  const proficiencyList = [
    { value: "Beginner", label: "Beginner" },
    { value: "Elementary", label: "Elementary" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Up Intermediate", label: "Up Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];
  function handleProficiency(item: Option) {
    setProficiency(item.value);
  }

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
                  <CustomSelect
                    name="wanted"
                    id="wanted"
                    options={options}
                    placeholder={selectLanguage}
                    onChange={handleSelect}
                  ></CustomSelect>
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
                  <CustomSelect
                    name="proficiency"
                    id="proficiency"
                    options={proficiencyList}
                    placeholder={proficiency}
                    onChange={handleProficiency}
                  ></CustomSelect>
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
