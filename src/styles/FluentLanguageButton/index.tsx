import { FluentLangBtn, ButtonFrame } from "./FluentLanguageButtonStyle";

interface props {
  title: string;
  className?: string;
}

function FluentLanguageBtn({ title, className }: props) {
  return (
    <>
      <ButtonFrame className={className}>
        <FluentLangBtn>{title}</FluentLangBtn>
      </ButtonFrame>
    </>
  );
}

export default FluentLanguageBtn;
