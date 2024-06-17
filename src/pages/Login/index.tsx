import { useEffect } from "react";
import axios from "axios";
import apiBase from "../../Api";
import loginImg from "/login.svg";
import logoFull from "/logo_full.png";
import googleLogo from "/Google_logo.svg";
import { Banner, Btn, Container, Logo, Wrapper } from "./loginStyle";

function Login() {
  const openNew = async () => {
    const { GET_LOGIN_URL } = apiBase;
    const url = await axios.get(GET_LOGIN_URL).then((res) => res.data.url);
    location.assign(url);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <Logo src={logoFull} alt="" />
            <h2>登入 / 註冊</h2>
            <Btn type="button" onClick={openNew}>
              <img src={googleLogo} alt="" />
              <p>Continue with google</p>
            </Btn>
          </div>
          <Banner src={loginImg} alt="" />
        </Container>
      </Wrapper>
    </>
  );
}

export default Login;
