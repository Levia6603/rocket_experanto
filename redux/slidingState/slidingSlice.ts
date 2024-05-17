import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slidingPostState: false,
};

const slidingStateSlice = createSlice({
  name: "slidingState",
  initialState,
  reducers: {
    setSlidingPostState: (state) => {
      state.slidingPostState = !state.slidingPostState;
    },
  },
});

export const { setSlidingPostState } = slidingStateSlice.actions;
export default slidingStateSlice.reducer;
