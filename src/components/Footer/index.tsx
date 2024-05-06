import { Wrapper, Container, FooterContent, FooterText } from "./footerStyle";
import logo from "/nav-logo.png";

function Footer() {
  return (
    <>
      <Wrapper>
        <Container>
          <FooterContent>
            <img src={logo} alt="logo" />
            <div>
              <ul>
                <li>
                  <h6>Your account</h6>
                </li>
                <li>Home</li>
                <li>Log in</li>
                <li>Profile</li>
                <li>My Favorites</li>
              </ul>
              <ul>
                <li>
                  <h6>About us</h6>
                </li>
                <li>How to use</li>
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
