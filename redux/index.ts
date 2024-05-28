import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    user: userSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
