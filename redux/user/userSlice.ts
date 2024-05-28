import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    avatar: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      console.log(actions.payload);
      state.user = actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
