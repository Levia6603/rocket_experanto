import { Wrapper, Container, PageButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../redux";
import { setPage } from "../../../redux/pages/pagesSlice";
import { useState } from "react";

function PageBar() {
  const dispatch = useDispatch();
  //* 從 redux state 取得總頁數
  const pageAmount = useSelector((state: RootStateType) => state.pages.pages);
  //* 產生頁數陣列
  const pagesArray = Array.from({ length: pageAmount }, (_, i) => i + 1);
  //* 目前頁數
  const [presentPage, setPresentPage] = useState(1);

  //* 點擊頁數
  const handleClick = (el: number) => {
    if (el < 1 || el > pageAmount) return;
    //* 用dispatch傳遞頁數
    dispatch(setPage(el));
    //* 用useState傳遞頁數
    setPresentPage(el);
  };
  //* 上一頁
  const handlePrevious = () => {
    if (presentPage < 1) return;
    dispatch(setPage(presentPage - 1));
  };
  //* 下一頁
  const handleNext = () => {
    if (presentPage < 1) return;
    dispatch(setPage(presentPage + 1));
  };

  return (
    <Wrapper>
      <Container>
        <PageButton onClick={handlePrevious}>上一頁</PageButton>
        {pagesArray.map((page) => (
          <PageButton key={page} onClick={() => handleClick(page)}>
            {page}
          </PageButton>
        ))}
        <PageButton onClick={handleNext}>下一頁</PageButton>
      </Container>
    </Wrapper>
  );
}

export default PageBar;
