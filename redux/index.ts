import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import userSlice from "./user/userSlice";
import checkProfileSlice from "./checkProfile/checkProfileSlice";

const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    user: userSlice,
    checkProfile: checkProfileSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
