import { styled } from "styled-components";
import ProcessBox from "../../components/ProcessBox";

export const WantedSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const WantedContainer = styled.div`
  max-width: 1320px;
  height: calc(100vh - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto 0.75rem;
`;
export const WantedBox = styled(ProcessBox)`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
    & > .question {
      width: 50%;
      margin-top: 1.5rem;
      padding: 10px 1.25rem;

      & .subItem {
        font-size: 1.25rem;
        font-weight: 900;
        margin: 0;
        padding: 0.5rem;
        text-align: center;
      }

      & > p {
        font-size: 1rem;
        margin: 0;
        padding: 0.5rem;
        text-align: center;
      }

      & > label {
        width: 100%;
        & > p {
          margin: 0;
          padding: 0.5rem;
        }
        & > p::after {
          content: "*";
          color: red;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
