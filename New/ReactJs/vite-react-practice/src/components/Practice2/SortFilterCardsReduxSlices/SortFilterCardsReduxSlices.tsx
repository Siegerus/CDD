import styles from './sort-filter-cards.module.scss';
import { useAppSelector, useAppDispatch } from './hooks/store';
import { placesActions } from './store/slices/places';
import { navsSelector, placesSelector } from './store/selectors/places';
import { Place } from './types/types';
import { useActionCreators } from './hooks/store';

const SortFilterCardsRedux = () => {
	const navs = useAppSelector(navsSelector /* placesSelectors.navs */);
	const places = useAppSelector(placesSelector /* placesSelectors.places */);
	const dispatch = useAppDispatch();
	const { setActiveCity } = useActionCreators(placesActions); // useActionCreators - кастомный хук для диспатча action
	const { sortCards } = useActionCreators(placesActions); // в результате хука - объект с actions. Деструктуризируем actions
	const { fetchData } = useActionCreators(placesActions);

	const getFilteredCards = (): Place[] => {
		const activeNav = navs.find((nav) => nav.isActive === true);
		return places.filter((place: Place) => place.city === activeNav?.city);
	};

	const navClickHandle = (idx: number) => {
		setActiveCity(idx); // Предпостительный вариант с типизированным хуком.
		// dispatch(placesActions.setActiveCity(idx)); // Вариант с dispatch.
	};

	const sortButtonClickHandle = (field: 'id' | 'price') => {
		sortCards(field);
		// dispatch(placesActions.sortCards(field));
	};

	const fetchButtonClickHandle = () => {
		fetchData('https://jsonplaceholder.typicode.com/posts')
			.unwrap()
			.then(() => console.log('fetched!'));
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
				<button onClick={() => fetchButtonClickHandle()}>Get Data</button>
			</main>
		</>
	);
};

export default SortFilterCardsRedux;
