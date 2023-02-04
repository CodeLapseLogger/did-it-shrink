import { Navigate } from "react-router-dom";

import { isAuthenticated } from "../../../utils/Authentication";

const ProtectedElement = (props) => {
  const { mappedPage } = props;
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return mappedPage;
};

export default ProtectedElement;
