import { Navigate } from 'react-router-dom';
import { AppRoute } from '../constants';
import { AuthState } from '../constants';

type PrivateRouteType = {
  children: JSX.Element;
  authState: keyof typeof AuthState;
  isReverse: boolean;
};

const PrivateRoute = ({ children, authState, isReverse }: PrivateRouteType) => {
  return authState === (isReverse ? AuthState.NoAuth : AuthState.Auth) ? (
    children
  ) : (
    <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
};

export default PrivateRoute;
