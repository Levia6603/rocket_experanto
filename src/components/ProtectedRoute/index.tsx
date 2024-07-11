// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem("token"); // 假设 token 保存在 localStorage 中

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
