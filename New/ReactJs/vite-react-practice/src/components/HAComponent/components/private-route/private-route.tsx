import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
	children: JSX.Element;
};

const hasAccess = true;

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
	return hasAccess ? (
		children
	) : (
		<Navigate to={'/go-away'} />
	) /* "Navigate" перенаправляет на другой компонент */;
};

export default PrivateRoute;
