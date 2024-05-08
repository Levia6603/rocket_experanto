import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./constant/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
