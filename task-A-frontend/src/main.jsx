import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./pages/HomePages.jsx";
import JobPages from "./pages/JobPages.jsx";

const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePages />,
      },
      {
        path: "/job",
        element: <JobPages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />
  </React.StrictMode>
);
