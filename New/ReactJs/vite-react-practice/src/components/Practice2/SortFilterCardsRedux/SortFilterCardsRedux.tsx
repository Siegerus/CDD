import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import styles from './sort-filter-cards.module.scss';

import setActiveCity from './store/actionCreators/setActiveCity';
import sortCards from './store/actionCreators/sortCard';
import { navsSelect, placesSelect } from './store/reducers/cardsReducer';
import { State, AppDispatch } from './types/state';
import { Place } from './types/types';

const SortFilterCardsRedux = () => {
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const useAppSelector: TypedUseSelectorHook<State> = useSelector;

	const navs = useAppSelector(navsSelect);
	const places = useAppSelector(placesSelect);
	const dispatch = useAppDispatch();

	const getFilteredCards = (): Place[] => {
		const activeNav = navs.find((nav) => nav.isActive === true);
		return places.filter((place: Place) => place.city === activeNav?.city);
	};

	const navClickHandle = (idx: number) => {
		dispatch(setActiveCity(idx));
	};

	const sortButtonClickHandle = (field: 'id' | 'price') => {
		dispatch(sortCards(field));
	};

	return (
		<>
			<nav className={styles.nav}>
				<ul>
					{navs.map((nav, i) => {
						const keyValue = `${nav.city}-${i}`;
						return (
							<li
								className={
									nav.isActive
										? `${styles.navItem} ${styles.navItem_active}`
										: styles.navItem
								}
								key={keyValue}
								onClick={() => navClickHandle(i)}>
								{nav.city}
							</li>
						);
					})}
				</ul>
			</nav>
			<main className={styles.wrapper}>
				<div className={styles['offer-counter']}>
					{getFilteredCards().length}
				</div>
				<ul>
					{getFilteredCards().map((card, i) => {
						const keyValue = `${card.city}-${i}`;
						return (
							<li className={`${styles.offer} ${styles.fadeIn}`} key={keyValue}>
								<h1 className={styles.offer__city}>{card.city}</h1>
								<p className={styles.offer__id}>{card.id}</p>
								<p className={styles.offer__name}>{card.name}</p>
								<div className={styles.offer__info}>{card.info}</div>
								<p>{card.price}</p>
							</li>
						);
					})}
				</ul>

				<button onClick={() => sortButtonClickHandle('id')}>Sort by ID!</button>
				<button onClick={() => sortButtonClickHandle('price')}>
					Sort by PRICE!
				</button>
			</main>
		</>
	);
};

export default SortFilterCardsRedux;
