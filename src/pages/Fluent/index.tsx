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

function Fluent() {
  const navigate = useNavigate();
  const optioins = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Italian", label: "Italian" },
    { value: "Japanese", label: "Japanese" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Russian", label: "Russian" },
    { value: "Mandarin", label: "Mandarin" },
    { value: "Korean", label: "Korean" },
    { value: "Vietnamese", label: "Vietnamese" },
  ];
  type Option = {
    value: string;
    label: string;
  };
  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  function handleSelect(item: Option) {
    setSelectLanguage(item.value);
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
                name="fluent"
                id="fluent"
                options={optioins}
                placeholder={selectLanguage}
                onChange={handleSelect}
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
