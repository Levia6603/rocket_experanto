import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";

const store = configureStore({
  reducer: {
    sliding: slidingSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
