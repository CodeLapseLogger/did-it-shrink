import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedElement = (props) => {
  const jwtCookie = Cookies.get("did-it-shrink-jwt-token");
  const { mappedPage } = props;
  if (jwtCookie === undefined) {
    return <Navigate to="login" />;
  }

  return mappedPage;
};

export default ProtectedElement;
