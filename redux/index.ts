import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import userSlice from "./user/userSlice";
import checkProfileSlice from "./checkProfile/checkProfileSlice";
import postIdSlice from "./postId/postIdSlice";


const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    user: userSlice,
    checkProfile: checkProfileSlice,
    postId: postIdSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
