import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const routes = (login) => [
  {
    path: "/",
    element: !login ? <Navigate to="/login" /> : <Navigate to="/dashboard" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
