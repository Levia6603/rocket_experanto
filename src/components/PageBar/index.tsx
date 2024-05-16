import { Wrapper, Container, PageButton } from "./styles";

function PageBar() {
  return (
    <Wrapper>
      <Container>
        <PageButton>上一頁</PageButton>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>下一頁</PageButton>
      </Container>
    </Wrapper>
  );
}

export default PageBar;
