import React from "react";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/Home";
import Layout from "./components/layout/Layout";
import Shop from "./routes/shop/Shop";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Customer from "./routes/customer/Customer";
import Seller from "./routes/seller/Seller";
import Add from "./routes/add/Add";
import Edit from "./routes/edit/Edit";
import ProductPage from "./routes/productPage/ProductPage";
import AdminPanel from "./routes/adminPanel/AdminPanel";

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
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/seller",
          element: <Seller />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/edit",
          element: <Edit />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/admin",
          element: <AdminPanel />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
