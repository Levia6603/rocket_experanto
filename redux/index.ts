import { configureStore } from "@reduxjs/toolkit";
import slidingSlice from "./slidingState/slidingSlice";
import userSlice from "./user/userSlice";
import checkProfileSlice from "./checkProfile/checkProfileSlice";
import postIdSlice from "./postId/postIdSlice";
import pagesSlice from "./pages/pagesSlice";


const store = configureStore({
  reducer: {
    sliding: slidingSlice,
    user: userSlice,
    checkProfile: checkProfileSlice,
    postId: postIdSlice,
    pages: pagesSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
