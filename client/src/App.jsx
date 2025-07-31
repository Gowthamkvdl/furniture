import React from "react";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/Home";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
