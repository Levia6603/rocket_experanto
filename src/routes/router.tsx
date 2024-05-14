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
    path: "/signup/fluent",
    element: <Fluent />,
  },
  { path: "/signup/wanted", element: <Wanted /> },
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
]);
