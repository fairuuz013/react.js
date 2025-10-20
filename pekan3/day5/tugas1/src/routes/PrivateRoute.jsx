// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
