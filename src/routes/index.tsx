import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { Dashboard } from "../pages/Dashboard";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
    </Routes>
  );
};
