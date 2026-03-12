import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(user);
  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  return children;
  //   return <div>{children}</div>;
};

export default PrivateRoute;
