import {
  LoginSection,
  LoginContainer,
  LoginBox,
  LoginWithGoogleButton,
} from "./loginStyle";

function Login() {
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
                <LoginWithGoogleButton type="button">
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
