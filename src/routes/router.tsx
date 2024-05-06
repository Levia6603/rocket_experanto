import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Login from "../pages/Login";
import Fluent from "../pages/Fluent";
// import Wanted from "../pages/Wanted";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  {
    path: "/signup/fluent",
    element: <Fluent />,
  },
  //   { path: "/signup/wanted", element: <Wanted /> },
]);
