import { Buttons, SubmitButton, CancelButton } from "./styles";

interface Props {
  left: string;
  right: string;
  backgroundColorRight: string;
  backgroundColorLeft: string;
  className?: string;
}

function ButtonPair({
  left,
  right,
  backgroundColorRight,
  backgroundColorLeft,
  className,
}: Props) {
  return (
    <>
      <Buttons>
        <CancelButton
          $backgroundColor={backgroundColorLeft}
          className={className}
        >
          {left}
        </CancelButton>
        <SubmitButton
          $backgroundColor={backgroundColorRight}
          className={className}
        >
          {right}
        </SubmitButton>
      </Buttons>
    </>
  );
}
export default ButtonPair;
