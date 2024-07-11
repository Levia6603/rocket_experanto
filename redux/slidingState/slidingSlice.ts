import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slidingPostState: false,
  slidingMatchingState: false,
};

const slidingStateSlice = createSlice({
  name: "slidingState",
  initialState,
  reducers: {
    setSlidingPostState: (state) => {
      state.slidingPostState = !state.slidingPostState;
    },
    setSlidingMatchingState: (state) => {
      state.slidingMatchingState = !state.slidingMatchingState;
    },
  },
});

export const { setSlidingPostState, setSlidingMatchingState } =
  slidingStateSlice.actions;
export default slidingStateSlice.reducer;
