import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: false,
  text: "",
};

const toastStateSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toggleToast: (state) => {
      state.toast = !state.toast;
    },
    setToastText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { toggleToast, setToastText } = toastStateSlice.actions;
export default toastStateSlice.reducer;
