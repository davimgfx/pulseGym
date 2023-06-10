import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Classes, Schedule, Pricing, Login, Contact, ErrorPage } from "./Pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pulseGym",
        element: <Home/>
      },
      {
        path: "pulseGym/about",
        element: <About />
      },
      {
        path: "pulseGym/classes",
        element: <Classes />
      },
      {
        path: "pulseGym/schedule",
        element: <Schedule />
      },
      {
        path: "pulseGym/pricing",
        element: <Pricing />
      },
      {
        path: "pulseGym/login",
        element: <Login />
      },
      {
        path: "pulseGym/contact",
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
