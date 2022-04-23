import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";

const routes = (login) => [
  {
    path: "/",
    element: !login ? <Navigate to="/login" /> : <Navigate to="/dashboard" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
