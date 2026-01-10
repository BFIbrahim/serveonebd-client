import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { Navigate, useLocation } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();

  if (loading || isLoading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  // not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // logged in but not admin
  if (role !== "admin") {
    return (
      <Navigate
        to="/forbidden"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default AdminRoute;
