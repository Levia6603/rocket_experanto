import { useEffect } from "react";
import {
  LoginSection,
  LoginContainer,
  LoginBox,
  LoginWithGoogleButton,
} from "./loginStyle";
import axios from "axios";
import apiBase from "../../Api";

function Login() {
  const openNew = async () => {
    const { GET_LOGIN_URL } = apiBase;
    const url = await axios.get(GET_LOGIN_URL).then((res) => res.data.url);
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
