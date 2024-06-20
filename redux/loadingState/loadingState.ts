import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingStateSlice = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});
