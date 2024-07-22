import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { logoutUser } = useAuth(); // Correctly named logoutUser

  useEffect(() => {
    if (logoutUser) {
      logoutUser();
    } else {
      console.error("logoutUser is not defined in useAuth");
    }
  }, [logoutUser]);

  return <Navigate to="/login" />;
}

export default Logout;
