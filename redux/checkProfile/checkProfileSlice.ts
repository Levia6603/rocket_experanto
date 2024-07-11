import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckProfileInterface {
  Code: number;
  Status: string;
  image: string[];
  skills: { language: string; languageId: number; goal: [] }[];
  userName: string;
  userAvatar: string;
}

const initialState = {
  checkProfileState: {} as CheckProfileInterface,
};

const checkProfileSlice = createSlice({
  name: "checkProfile",
  initialState,
  reducers: {
    setCheckProfileState: (
      state,
      action: PayloadAction<CheckProfileInterface>
    ) => {
      state.checkProfileState = action.payload;
    },
  },
});

export const { setCheckProfileState } = checkProfileSlice.actions;
export default checkProfileSlice.reducer;
