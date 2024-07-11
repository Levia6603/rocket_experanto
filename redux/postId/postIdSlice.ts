import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: 0,
};

const postIdSlice = createSlice({
  name: "postId",
  initialState,
  reducers: {
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const { setPostId } = postIdSlice.actions;
export default postIdSlice.reducer;
