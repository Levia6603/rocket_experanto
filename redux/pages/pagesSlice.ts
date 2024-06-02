import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: 1,
  page: 1,
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
  },
});

export const { setPages, setPage } = pagesSlice.actions;
export default pagesSlice.reducer;
