import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { RequestPasswordRecoveryPage } from "../pages/passwordRecovery/requestPasswordRecoveryPage";
import { ExecutePasswordRecoveryPage } from "../pages/passwordRecovery/executePasswordRecoveryPage";
import { Dashboard } from "../pages/Dashboard";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { Profile } from "../pages/Profile";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/request-password-recovery" element={<RequestPasswordRecoveryPage />} />
      <Route path="/execute-password-recovery" element={<ExecutePasswordRecoveryPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
