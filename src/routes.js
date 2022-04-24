import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./component/layouts/DashboardLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const DummyComp = ({ title }) => {
  return <h1>{title}</h1>;
};

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "", element: <DummyComp title="dashboard" /> }],
  },
  {
    path: "/materi",
    element: <DashboardLayout />,
    children: [{ path: "", element: <DummyComp title="materi" /> }],
  },
  {
    path: "/kelas",
    element: <DashboardLayout />,
    children: [{ path: "", element: <DummyComp title="kelas" /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
