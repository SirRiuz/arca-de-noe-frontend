// src/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Screens/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import { useAppContext } from "../AppContext";

const AppRoutes = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/reset-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
