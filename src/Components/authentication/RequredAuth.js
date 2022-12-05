import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const RequredAuth = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequredAuth;
