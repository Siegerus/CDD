import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import ErrorPage from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import { AppRoute, getAuthState } from '../constants';
import { SortField, Offer } from '../types/types';
import { offersActions } from '../store/slices/offers';
import { useAppSelector } from '../hooks/store';
import { useActionCreators } from '../hooks/store';
import {
  selectOffers,
  selectActiveCard,
  selectLoadingStatus,
  getNavs,
  getActiveNav,
} from '../store/selectors/offers';

function App(): JSX.Element {
  const navs = useAppSelector(getNavs);
  const activeNav = useAppSelector(getActiveNav);
  const offers = useAppSelector(selectOffers);
  const activeCard = useAppSelector(selectActiveCard);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const { setActiveNav, sortByScale, setActiveId, setFavorites } =
    useActionCreators(offersActions);

  const currentCity = activeNav[0].city;

  const getFilteredOffers = useMemo(
    () =>
      offers.filter((offer: Offer) => offer.city.name === activeNav[0].city),
    [activeNav]
  );

  const onNavClickHandle = useCallback((id: string) => {
    setActiveNav(id);
  }, []);

  const sortinbyScaleHandle = ({
    sortField: field,
    reverse: isReverse,
    initial: isInitial,
  }: SortField) => {
    sortByScale({
      sortField: field,
      reverse: isReverse,
      initial: isInitial,
    });
  };

  const onMouseEnterHandle = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const onClickFavoriteHandle = useCallback((id: string) => {
    setFavorites(id);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <MainPage
              isMainPage
              authState={getAuthState()}
              activeNavs={navs}
              onNavClickHandle={onNavClickHandle}
              onMouseEnterHandle={onMouseEnterHandle}
              filteredByCity={getFilteredOffers}
              onSortinbyScaleHandle={sortinbyScaleHandle}
              onClickFavoriteHandle={onClickFavoriteHandle}
              currentCity={currentCity}
              activeCard={activeCard}
              loadingStatus={loadingStatus}
            />
          }
        />
        <Route
          path={AppRoute.LOGIN}
          element={
            <PrivateRoute authState={getAuthState()} isReverse>
              <LoginPage isLoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FAVORTES}
          element={
            <PrivateRoute authState={getAuthState()} isReverse={false}>
              <FavoritesPage
                authState={getAuthState()}
                currentCity={currentCity}
                offers={getFilteredOffers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OFFER}
          element={
            <OfferPage
              offers={getFilteredOffers}
              authState={getAuthState()}
              activeCard={activeCard}
              onMouseEnterHandle={onMouseEnterHandle}
            />
          }
        />
        <Route path={AppRoute.PAGE404} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
