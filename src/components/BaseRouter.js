import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AboutUS from "./AboutUS";

const BaseRouter = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute element={<Login />} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <PublicRoute element={<AboutUS />} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute element={<Dashboard />} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default BaseRouter;
