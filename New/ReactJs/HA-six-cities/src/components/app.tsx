import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthState } from '../constants';
import { NavItemType, Offer } from '../types';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import ErrorPage from '../pages/404-page/404-page';

import MainPage from '../pages/main-page/main-page';
import { useState, useEffect } from 'react';

type AppProps = {
  offersCount: number;
  navItems: NavItemType[];
  offers: Offer[];
};

function App({ offersCount, navItems, offers }: AppProps): JSX.Element {
  const [activeNavs, setActiveNavs] = useState(navItems);
  const [currentCity, setCurrentCity] = useState('Paris');

  const onNavClickHandle = (id: string) => {
    setActiveNavs(
      activeNavs.map((activeNav) => {
        return activeNav.id === id
          ? {
              ...activeNav,
              isActive: true,
            }
          : {
              ...activeNav,
              isActive: false,
            };
      })
    );
  };

  useEffect(() => {
    const ativeNav = activeNavs.filter((nav) => nav.isActive === true);
    setCurrentCity(ativeNav[0].city);
  }, [activeNavs]);

  let filteredByCity = offers.filter(
    (offer) => offer.city.name === currentCity
  );

  const [activeCard, setActiveCard] = useState('');

  const [sortedCards, setSortedCards] = useState(filteredByCity);

  const sortinbyScaleHandle = (
    property: 'price' | 'rating',
    direction: boolean
  ) => {
    const sorted = filteredByCity?.sort((a: Offer, b: Offer) => {
      return a[property] > b[property] === direction ? 1 : -1;
    });
    setSortedCards([...sorted]);
  };

  const popularFilterHandle = () => {
    setSortedCards(filteredByCity.filter((offer) => offer.price === 80));
  };

  const onMouseEnterHandle = (id: string) => {
    setActiveCard(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              isMainPage
              authState={AuthState.Auth}
              offersCount={offersCount}
              activeNavs={activeNavs}
              onNavClickHandle={onNavClickHandle}
              onMouseEnterHandle={onMouseEnterHandle}
              filteredByCity={filteredByCity}
              onSortinbyScaleHandle={sortinbyScaleHandle}
              onPopularFilterHandle={popularFilterHandle}
              currentCity={currentCity}
              activeCard={activeCard}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute authState={AuthState.Auth} isReverse>
              <LoginPage isLoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authState={AuthState.Auth} isReverse={false}>
              <FavoritesPage authState={AuthState.Auth} offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage authState={AuthState.Auth} />}
        />
        <Route path={AppRoute.Page404} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
