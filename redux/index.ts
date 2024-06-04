import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import checkProfileSlice from "./checkProfile/checkProfileSlice";
import postIdSlice from "./postId/postIdSlice";
import pagesSlice from "./pages/pagesSlice";
import profileStateSlice from "./profileState/profileState";

const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    checkProfile: checkProfileSlice,
    postId: postIdSlice,
    pages: pagesSlice,
    profileState: profileStateSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
