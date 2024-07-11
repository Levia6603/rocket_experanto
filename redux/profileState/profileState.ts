import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAll: false,
};

const profileStateSlice = createSlice({
  name: "profileState",
  initialState,
  reducers: {
    setShowAll: (state) => {
      state.showAll = !state.showAll;
    },
  },
});

export const { setShowAll } = profileStateSlice.actions;
export default profileStateSlice.reducer;
