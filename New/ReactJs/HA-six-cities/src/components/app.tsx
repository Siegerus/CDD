import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import { AppRoute, AuthState } from '../constants';
import { NavItemType, Offer } from '../types';
import ErrorPage from '../pages/404-page/404-page';

import MainPage from '../pages/main-page/main-page';
import { useState } from 'react';

type AppProps = {
	offersCount: number;
	navItems: NavItemType[];
	offers: Offer[];
};

function App({ offersCount, navItems, offers }: AppProps): JSX.Element {

	const [activeNavs, setActiveNavs] = useState(navItems);
	const [currentCity, setCurrentCity] = useState('Paris');
	const [activeCard, setActiveCard] = useState(offers);

	const onNavClickHandle = (id: string, city: string) => {
		setCurrentCity(city);
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
			}),
		);
		/* setTimeout(() => {
			activeNavs.forEach(nav => {
				if(nav.isActive === true) setFilteredByCity((res) => {
					res = offers.filter(item => item.city.name === nav.city);
					return res;
				});
			})
		}, 500) */
	}
	
	const filteredByCity = offers.filter(offer => offer.city.name === currentCity);
	
	// const cardIds = offers?.map(card => card.id)

	const onMouseEnterHandle = (id: string | undefined) => {
		setActiveCard(
			activeCard?.map((item) => {
				if (item.id === id) {
					console.log('on element')
					return {
						...item,
					};
				} else
					return {
						...item,
					};
			}),
		);
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
							// onMouseEnterHandle={onMouseEnterHandle}
							filteredByCity={filteredByCity}
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
