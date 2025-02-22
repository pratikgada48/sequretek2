import React from "react";
import { Navigate } from "react-router";
import { getSessionData } from "../../helpers/storagehandler";

const PrivateRoute = (props) => {
  const token = getSessionData("token");
  return (
    <>{token ? <>{props.element}</> : <Navigate to="/" replace={true} />}</>
  );
};

export default PrivateRoute;
