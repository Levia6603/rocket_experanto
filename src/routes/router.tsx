import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Fluent from "../pages/Fluent";
import Wanted from "../pages/Wanted";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import ProfileIndex from "../pages/ProfileIndex";
import Home from "../pages/Home";
import HomeIndex from "../pages/HomeIndex";
import FullPost from "../pages/FullPost";
import Posting from "../pages/Posting";
import Apply from "../components/Apply";
import WaitingList from "../pages/WaitingList";
import Notifications from "../pages/Notifications";
import Exchanging from "../pages/Exchanging";
import Commenting from "../pages/Commenting";
import Matching from "../pages/Matching";
import SignUpEdit from "../pages/SignUpEdit";

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
    path: "/signup",
    element: <SignUpEdit />,
    children: [{ path: "edit", element: <ProfileEdit /> }],
  },
  {
    path: "/user",
    element: <Profile />,
    children: [
      {
        path: "profile",
        element: <ProfileIndex />,
      },
      {
        path: "profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "waitinglist",
        element: <WaitingList />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "exchanging/:exchangingId",
        element: <Exchanging />,
      },
      {
        path: "commenting/:commentingId",
        element: <Commenting />,
      },
      {
        path: "matching",
        element: <Matching />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "index", element: <HomeIndex /> },
      { path: "post", element: <FullPost /> },
    ],
  },
  { path: "posting", element: <Posting /> },
  { path: "/applying", element: <Apply /> },
  { path: "*", element: <div>Not Found</div> },
]);
