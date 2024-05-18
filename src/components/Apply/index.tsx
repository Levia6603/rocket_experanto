import {
  Wrapper,
  Container,
  CloseButton,
  Header,
  Info,
  ScheduleWrapper,
  CertificationWrapper,
} from "./styles";
import Schedule from "../Schedule";
import close from "/close-lg.svg";
import avatar from "/nav-profile.png";
import {
  Certification,
  DeleteButton,
  CertificationCard,
} from "../../pages/Posting/styles";
import noCertification_sm from "/no-certification-sm.svg";

function Apply() {
  return (
    <Wrapper>
      <div>
        <CloseButton>
          <img src={close} alt="close" />
        </CloseButton>
      </div>
      <Container>
        <Header>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <h6>Jane Doe</h6>
        </Header>
        <Info>
          <div>
            <h6>擅長語言</h6>
            <input type="text" disabled value={"中文"} />
          </div>
          <div>
            <h6>想學語言</h6>
            <input type="text" disabled value={"英文"} />
          </div>
          <div>
            <h6>簡單地對方介紹你自己吧！</h6>
            <textarea />
          </div>
        </Info>
        <ScheduleWrapper>
          <h6>請選擇可以交換的時間</h6>
          <Schedule />
        </ScheduleWrapper>
        <CertificationWrapper>
          <h6>語言證照</h6>
          <Certification>
            <CertificationCard>
              <DeleteButton>
                <img src={close} alt="close" />
              </DeleteButton>
              <div>
                <img src={noCertification_sm} alt="no certification" />
              </div>
            </CertificationCard>
          </Certification>
        </CertificationWrapper>
      </Container>
    </Wrapper>
  );
}

export default Apply;
