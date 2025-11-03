import { Navigate } from "react-router-dom";
import { Paths } from "../constants";
import { authState } from "../constants";

type PrivateRouteType = {
    children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRouteType) => {
    console.log(children)
  return (
    authState ? children : <Navigate to={Paths.Login} />
  )
}

export default PrivateRoute