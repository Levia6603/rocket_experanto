import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpSection,
  SignUpContainer,
  FluentBox,
  ContinueButton,
} from "./fluentStyle";
import BackButton from "../../components/BackButton";
import AddButton from "../../components/AddButton";

function Fluent() {
  const defaultValue = "Select a language";
  const [selectLanguage, setSelectLanguage] = useState(defaultValue);
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectLanguage(e.target.value);
  }
  const navigate = useNavigate();

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
              <select
                name="fluent"
                id="fluent"
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
