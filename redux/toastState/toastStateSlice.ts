import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: false,
};

const toastStateSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toggleToast: (state) => {
      state.toast = !state.toast;
    },
  },
});

export const { toggleToast } = toastStateSlice.actions;
export default toastStateSlice.reducer;
