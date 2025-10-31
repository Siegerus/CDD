import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
}

const hasAccess = false;

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  return (
    hasAccess ? children : <Navigate to={'/go-away'} />
  )
}

export default PrivateRoute