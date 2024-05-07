import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WantedSection, WantedContainer, WantedBox } from "./wantedStyle";
import { ContinueButton } from "../Fluent/fluentStyle";
import BackButton from "../../components/BackButton";
import AddButton from "../../components/AddButton";

export default function Wanted() {
  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectLanguage(e.target.value);
  }

  const navigate = useNavigate();

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
                  <select
                    name="wanted"
                    id="wanted"
                    defaultValue={selectLanguage}
                    onChange={handleSelect}
                  >
                    <option disabled>Select a language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Russian">Russian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Korean">Korean</option>
                    <option value="Vietnamese">Vietnamese</option>
                  </select>
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
                  <select
                    name="proficiency"
                    id="proficiency"
                    defaultValue={selectLanguage}
                    onChange={handleSelect}
                  >
                    <option disabled>Select a language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Russian">Russian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Korean">Korean</option>
                    <option value="Vietnamese">Vietnamese</option>
                  </select>
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
