import React from "react";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/Home";
import Layout from "./components/layout/Layout";
import Product from "./routes/product/Product";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Product />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
