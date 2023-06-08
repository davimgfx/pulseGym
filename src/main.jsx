import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Classes, Schedule, Pricing, Login, Contact } from "./Pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "classes",
        element: <Classes />
      },
      {
        path: "schedule",
        element: <Schedule />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
