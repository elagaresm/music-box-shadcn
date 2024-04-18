import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Main from "./components/main";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Main /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
