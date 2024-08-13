import { Certification, CertificationCard, DeleteButton } from "./styles";
// import noCertification_sm from "/no-certification-sm.svg";
import close from "/close-lg.svg";

interface Props {
  image: string[];
}

function CertificationsEdit({ image }: Props) {
  return (
    <>
      <Certification>
        {image.map((el, index) => (
          <CertificationCard key={index}>
            <div>
              <DeleteButton>
                <img src={close} alt="close" />
              </DeleteButton>
            </div>
            <div>
              <img src={el} alt="no certification" />
            </div>
          </CertificationCard>
        ))}
      </Certification>
    </>
  );
}

export default CertificationsEdit;
