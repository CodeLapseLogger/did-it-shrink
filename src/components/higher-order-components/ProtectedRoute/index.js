import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const jwtCookie = Cookies.get("did-it-shrink-jwt-token");
  if (jwtCookie === undefined) {
    return <Navigate to="login" />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
