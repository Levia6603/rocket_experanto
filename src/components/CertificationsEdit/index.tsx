import { Certification, CertificationCard, DeleteButton } from "./styles";
import noCertification_sm from "/no-certification-sm.svg";
import close from "/close-lg.svg";
function CertificationsEdit() {
  return (
    <>
      <Certification>
        <CertificationCard>
          <div>
            <DeleteButton>
              <img src={close} alt="close" />
            </DeleteButton>
          </div>

          <div>
            <img src={noCertification_sm} alt="no certification" />
          </div>
        </CertificationCard>
      </Certification>
    </>
  );
}

export default CertificationsEdit;
