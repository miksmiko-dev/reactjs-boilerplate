import { Navigate, useLocation } from "react-router-dom";
import type { AuthGuardProps } from "./types/types";
import { useAuth } from "@/hooks/useAuth";

const Authguards = ({ allowedRoles, children }: AuthGuardProps) => {
  const location = useLocation();
  const userRole = "admin";
  const { user } = useAuth();
  const isLoggedIn = !!userRole;

  if (!isLoggedIn) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to={"/unauthorized"} replace />;
  }

  return children;
};

export default Authguards;
