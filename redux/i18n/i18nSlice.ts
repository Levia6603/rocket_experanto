import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "中文",
};

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = i18nSlice.actions;
export default i18nSlice.reducer;
