import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: 1,
  page: 1,
  languageIds: [] as number[],
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLanguageIds: (state, action) => {
      state.languageIds = action.payload;
    },
  },
});

export const { setPages, setPage, setLanguageIds } = pagesSlice.actions;
export default pagesSlice.reducer;
