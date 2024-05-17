import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./constant/GlobalStyle";
import { Provider } from "react-redux";
import store from "../redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
