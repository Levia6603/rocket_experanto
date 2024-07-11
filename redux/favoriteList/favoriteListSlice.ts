import { createSlice } from "@reduxjs/toolkit";

type favorite = {
  postId: number;
};

const initialState = {
  favoriteList: [] as favorite[],
};

const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    setFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
  },
});

export const { setFavoriteList } = favoriteListSlice.actions;
export default favoriteListSlice.reducer;
