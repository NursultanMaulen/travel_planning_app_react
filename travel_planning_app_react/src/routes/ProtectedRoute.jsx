import { Navigate, Outlet } from "react-router";
import { useLoginSignupContext } from "../context/loginSignUpContext";

const ProtectedRoute = ({ children }) => {
  const {isAuthenticated} = useLoginSignupContext();

  return isAuthenticated ? children : <Navigate to="/login" replace />;

};

export default ProtectedRoute;
