import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpSection,
  SignUpContainer,
  FluentBox,
  ContinueButton,
  CustomSelect,
} from "./fluentStyle";
import BackButton from "../../components/BackButton";
import AddButton from "../../components/AddButton";
import Selector from "../../components/Selector";

function Fluent() {
  const navigate = useNavigate();

  const languageList = ["Chinese", "English", "Japanese", "Korean"];

  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  function handleSelect(el: string) {
    setSelectLanguage(el);
  }

  useEffect(() => {
    console.log(selectLanguage);
  }, [selectLanguage]);

  return (
    <>
      <SignUpSection>
        <SignUpContainer>
          <FluentBox>
            <div>
              <BackButton onClick={() => navigate("/login")}>
                <img src="/back-vector.png" alt="back" />
              </BackButton>
            </div>
            <img src="/logo-large.png" alt="experanto logo" />
            <p>What’s your fluent language?</p>
            <p>
              You can choose up to 5 different Fluent languages!
              <br /> You can change this at any time.
            </p>
            <label>
              <p>Fluent Language</p>

              <CustomSelect
                size="middle"
                languageList={languageList}
                currentValue={selectLanguage}
                setValue={handleSelect}
              ></CustomSelect>
              <AddButton type="button">
                <img src="/plus-circle.svg" alt="" />
                <p>Add</p>
              </AddButton>
            </label>
            <ContinueButton
              type="button"
              onClick={() => navigate("/signup/wanted")}
            >
              Continue
            </ContinueButton>
          </FluentBox>
        </SignUpContainer>
      </SignUpSection>
    </>
  );
}
export default Fluent;
