import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import userSlice from "./user/userSlice";
import postIdSlice from "./postId/postIdSlice";

const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    user: userSlice,
    postId: postIdSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
