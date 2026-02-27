import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import ErrorPage from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import { AppRoute, AuthState } from '../constants';
import { SortField, NavItemType, Offer } from '../types/types';
import { offersActions } from '../store/slices/offers';
import { useAppSelector } from '../hooks/store';
import { useActionCreators } from '../hooks/store';
import {
  selectOffers,
  selectNavs,
  selectActiveCard,
  selectLoadingStatus,
} from '../store/selectors/offers';

function App(): JSX.Element {
  // console.log('mounted');
  const navs = useAppSelector(selectNavs);
  const offers = useAppSelector(selectOffers);
  const activeCard = useAppSelector(selectActiveCard);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const { setActiveNav, sortByScale, setActiveId, setFavorites } =
    useActionCreators(offersActions);

  const getActiveNav = () =>
    navs.filter((nav: NavItemType) => nav.isActive === true)[0];

  const getCurrentCity = () => getActiveNav().city;

  const getFilteredOffers = () =>
    offers.filter((offer: Offer) => offer.city.name === getActiveNav().city);

  const onNavClickHandle = (id: string) => {
    setActiveNav(id);
  };

  const sortinbyScaleHandle = ({
    field: field,
    reverse: isReverse,
    initial: isInitial,
  }: SortField) => {
    sortByScale({
      field: field,
      reverse: isReverse,
      initial: isInitial,
    });
  };

  const onMouseEnterHandle = (id: string) => {
    setActiveId(id);
  };

  const onClickFavoriteHandle = (id: string) => {
    setFavorites(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={
            <MainPage
              isMainPage
              authState={AuthState.AUTH}
              activeNavs={navs}
              onNavClickHandle={onNavClickHandle}
              onMouseEnterHandle={onMouseEnterHandle}
              filteredByCity={getFilteredOffers()}
              onSortinbyScaleHandle={sortinbyScaleHandle}
              onClickFavoriteHandle={onClickFavoriteHandle}
              currentCity={getCurrentCity()}
              activeCard={activeCard}
              loadingStatus={loadingStatus}
            />
          }
        />
        <Route
          path={AppRoute.LOGIN}
          element={
            <PrivateRoute authState={AuthState.AUTH} isReverse>
              <LoginPage isLoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FAVORTES}
          element={
            <PrivateRoute authState={AuthState.AUTH} isReverse={false}>
              <FavoritesPage
                authState={AuthState.AUTH}
                currentCity={getCurrentCity()}
                offers={getFilteredOffers()}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OFFER}
          element={
            <OfferPage
              offers={getFilteredOffers()}
              authState={AuthState.AUTH}
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
