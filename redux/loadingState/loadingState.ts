import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingStateSlice = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingStateSlice.actions;
export default loadingStateSlice.reducer;
