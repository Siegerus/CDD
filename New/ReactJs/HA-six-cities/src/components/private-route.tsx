import { Navigate } from 'react-router-dom';
import { AppRoute } from '../constants';
import { AuthState } from '../constants';

type PrivateRouteType = {
  children: JSX.Element;
  authState: (typeof AuthState)[keyof typeof AuthState];
  isReverse: boolean;
};
// 'NoAuth' | 'Auth' | 'Unknow'
const PrivateRoute = ({ children, authState, isReverse }: PrivateRouteType) => {
  return authState === /* isReverse ? AuthState.NO_AUTH : */ AuthState.AUTH ? (
    children
  ) : (
    <Navigate to={isReverse ? AppRoute.ROOT : AppRoute.LOGIN} />
  );
};

export default PrivateRoute;
