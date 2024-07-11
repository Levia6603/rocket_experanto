import { Wrapper, Container, FooterContent, FooterText } from "./footerStyle";
import logo from "/logo_large.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Container>
          <FooterContent>
            <img src={logo} alt="logo" />
            <div>
              <ul>
                <li>
                  <h6>您的帳號</h6>
                </li>
                <li onClick={() => navigate("/")}>首頁</li>
                <li onClick={() => navigate("/login")}>登入</li>
                <li onClick={() => navigate("/user/profile/index")}>
                  個人資訊
                </li>
                <li>我的收藏</li>
              </ul>
              <ul>
                <li>
                  <h6>關於我們</h6>
                </li>
                <li>使用教學</li>
              </ul>
            </div>
          </FooterContent>
          <FooterText>
            <p>© 2024 Your company. All rights reserved. </p>
            <ul>
              <li>
                <p>Terms & Conditions</p>
              </li>
              <li>
                <p>Privacy & cookies</p>
              </li>
              <li>
                <p>Accessibility</p>
              </li>
              <li>
                <p>Customer Data Promise</p>
              </li>
            </ul>
          </FooterText>
        </Container>
      </Wrapper>
    </>
  );
}
export default Footer;
