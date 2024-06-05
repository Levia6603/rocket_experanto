import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import ProfileIndex from "../pages/ProfileIndex";
import Home from "../pages/Home";
import HomeIndex from "../pages/HomeIndex";
import FullPost from "../pages/FullPost";
import Posting from "../pages/Posting";
import WaitingList from "../pages/WaitingList";
import Notifications from "../pages/Notifications";
import Exchanging from "../pages/Exchanging";
import Commenting from "../pages/Commenting";
import PassValue from "../pages/PassValue";
import Matching from "../pages/Matching";
import SignUpEdit from "../pages/SignUpEdit";
import FullReview from "../pages/FullReview";
import VideoChat from "../pages/VideoChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth/verify",
    element: <PassValue />,
  },
  {
    path: "/user/profile",
    element: <SignUpEdit />,
    children: [
      { path: "", element: <Navigate to="index" replace /> },
      { path: "edit", element: <ProfileEdit /> },
    ],
  },
  {
    path: "/user",
    element: <Profile />,
    children: [
      { path: "", element: <Navigate to="profile/index" replace /> },
      {
        path: "profile/index",
        element: <ProfileIndex />,
      },
      {
        path: "waiting_list",
        element: <WaitingList />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "exchanging/:id",
        element: <Exchanging />,
      },
      {
        path: "commenting/:id",
        element: <Commenting />,
      },
      {
        path: "matching",
        element: <Matching />,
      },
      {
        path: "full_review/:id",
        element: <FullReview />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "", element: <Navigate to="index" replace /> },
      { path: "index", element: <HomeIndex /> },
      { path: "post/:id", element: <FullPost /> },
    ],
  },
  { path: "posting", element: <Posting /> },
  { path: "videocall", element: <VideoChat /> },
  { path: "*", element: <div>Not Found</div> },
]);
