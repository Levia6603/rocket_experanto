import { useNavigate } from "react-router-dom";
import {
  LoginSection,
  LoginContainer,
  LoginBox,
  LoginWithGoogleButton,
} from "./loginStyle";
import BackButton from "../../components/BackButton";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <LoginSection>
        <LoginContainer>
          <LoginBox>
            <div>
              <BackButton onClick={() => navigate("/")}>
                <img src="/back-vector.png" alt="back" />
              </BackButton>
            </div>
            <img src="/logo-large.png" alt="experanto logo" />
            <div>
              <p>SIGN IN</p>
              <hr />
              <div>
                <LoginWithGoogleButton
                  type="button"
                  onClick={() => navigate("/signup/fluent")}
                >
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
