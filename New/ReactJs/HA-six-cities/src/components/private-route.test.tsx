import { render, screen } from '@testing-library/react';
import { withHistory } from '../utils/mocks/mock-component';
import { AppRoute, AuthState } from '../constants';
import PrivateRoute from './private-route';
import { Route, Routes } from 'react-router-dom';

describe('Component: PrivateRoute', () => {
  let mockHistory: (typeof AppRoute)[keyof typeof AppRoute];

  beforeEach(() => {
    mockHistory = AppRoute.FAVORTES; // перед каждым тестом имитируем переход по "/favorites"
  });

  it('Should render component for private  route, when user autorized', () => {
    const loginComponentRouteText = 'login';
    const favoritesComponentRouteText = 'favorites';
    const preperedComponent = withHistory(
      <Routes>
        <Route
          path={AppRoute.LOGIN}
          element={<span>{loginComponentRouteText}</span>}
        />
        <Route
          path={AppRoute.FAVORTES}
          element={
            <PrivateRoute authState={AuthState.AUTH} isReverse={false}>
              <span>{favoritesComponentRouteText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(preperedComponent);

    expect(screen.getByText(favoritesComponentRouteText)).toBeInTheDocument();
    expect(screen.queryByText(loginComponentRouteText)).not.toBeInTheDocument(); // Если текста не должно быть в тесте, то используем "query", иначе тест упадёт
  });

  it('Should render component for public route, when user not autorized', () => {
    const loginComponentRouteText = 'login';
    const favoritesComponentRouteText = 'favorites';
    const preperedComponent = withHistory(
      <Routes>
        <Route
          path={AppRoute.LOGIN}
          element={<span>{loginComponentRouteText}</span>}
        />
        <Route
          path={AppRoute.FAVORTES}
          element={
            <PrivateRoute authState={AuthState.NO_AUTH} isReverse={false}>
              <span>{favoritesComponentRouteText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(preperedComponent);

    expect(screen.getByText(loginComponentRouteText)).toBeInTheDocument();
    expect(
      screen.queryByText(favoritesComponentRouteText)
    ).not.toBeInTheDocument();
  });
});
