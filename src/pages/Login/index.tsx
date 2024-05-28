import { useEffect } from "react";
import {
  LoginSection,
  LoginContainer,
  LoginBox,
  LoginWithGoogleButton,
} from "./loginStyle";
import axios from "axios";
import { GetLoginUrl } from "../../Api";

function Login() {
  const openNew = async () => {
    const url = await axios.get(GetLoginUrl).then((res) => res.data.url);
    location.assign(url);
  };

  useEffect(() => {}, []);

  return (
    <>
      <LoginSection>
        <LoginContainer>
          <LoginBox>
            <img src="/logo-large.png" alt="experanto logo" />
            <div>
              <p>SIGN IN</p>
              <hr />
              <div>
                <LoginWithGoogleButton type="button" onClick={openNew}>
                  <img src="/google-icon-button.png" alt="google" />
                  <p>Continue with Google</p>
                </LoginWithGoogleButton>
              </div>
            </div>
          </LoginBox>
        </LoginContainer>
      </LoginSection>
    </>
  );
}

export default Login;
