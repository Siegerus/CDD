import { useState, useEffect } from 'react';
import styles from './sort-filter-cards.module.scss';

type SortFieldType = 'id' | 'price';

type NavCity = {
	city: string;
	isActive: boolean;
};

type Place = {
	id: number;
	name: string;
	city: string;
	info: string;
	price: number;
};

const NAV_CITIES: NavCity[] = [
	{ city: 'Simferopol', isActive: true },
	{ city: 'Sevastopol', isActive: false },
	{ city: 'Partenit', isActive: false },
	{ city: 'Alushta', isActive: false },
	{ city: 'Yalta', isActive: false },
];

const PLACES: Place[] = [
	{
		id: 1,
		name: 'Lorem',
		city: 'Simferopol',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 89,
	},
	{
		id: 2,
		name: 'Loripsum',
		city: 'Simferopol',
		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
		price: 44,
	},
	{
		id: 3,
		name: 'Lorem ipsum',
		city: 'Simferopol',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum  nulla doloribus placeat!',
		price: 34,
	},
	{
		id: 4,
		name: 'Lorem',
		city: 'Sevastopol',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 98,
	},
	{
		id: 5,
		name: 'Loripsum',
		city: 'Sevastopol',
		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
		price: 11,
	},
	{
		id: 6,
		name: 'Lorem ipsum',
		city: 'Yalta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum  nulla doloribus placeat!',
		price: 57,
	},
	{
		id: 7,
		name: 'Lor',
		city: 'Yalta',
		info: 'Lorem ipsum dolor sit!',
		price: 85,
	},
	{
		id: 8,
		name: 'Loripsum',
		city: 'Partenit',
		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
		price: 23,
	},
	{
		id: 3,
		name: 'Lorem',
		city: 'Alushta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 44,
	},
	{
		id: 4,
		name: 'Lorem',
		city: 'Alushta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 18,
	},
	{
		id: 1,
		name: 'Lorem',
		city: 'Alushta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 92,
	},
	{
		id: 2,
		name: 'Lorem',
		city: 'Alushta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 23,
	},
	{
		id: 5,
		name: 'Lorem',
		city: 'Alushta',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
		price: 76,
	},
];

const SortFilterCards = () => {
	const [navs, setNavs] = useState(NAV_CITIES);
	const [filteredByCity, setFilteredByCity] = useState(PLACES);
	const [lowToHeight, setLowToHeight] = useState(true);

	const navClickHandle = (idx: number) => {
		setNavs(
			NAV_CITIES.map((nav, i) => {
				return i == idx
					? {
							...nav,
							isActive: true,
					  }
					: {
							...nav,
							isActive: false,
					  };
			})
		);
	};

	const activeNav = navs.filter((nav) => nav.isActive);

	useEffect(() => {
		setFilteredByCity(
			PLACES.filter((place) => place.city === activeNav[0].city)
		);
	}, [navs]);

	const sortClickHandle = (sortField: SortFieldType) => {
		setLowToHeight((prevState) => !prevState);
		const sorted = filteredByCity.sort((a, b) => {
			if (lowToHeight) return a[sortField] < b[sortField] ? -1 : 1;
			else return b[sortField] < a[sortField] ? -1 : 1;
		});

		setFilteredByCity([...sorted]);
	};

	return (
		<>
			<nav className={styles.nav}>
				<ul>
					{navs.map((navs, i) => {
						const keyValue = `${navs.city}-${i}`;
						return (
							<li
								className={
									navs.isActive
										? `${styles.navItem} ${styles.navItem_active}`
										: styles.navItem
								}
								key={keyValue}
								onClick={() => navClickHandle(i)}>
								{navs.city}
							</li>
						);
					})}
				</ul>
			</nav>
			<main className={styles.wrapper}>
				<div className={styles['offer-counter']}>{filteredByCity.length}</div>
				<ul>
					{filteredByCity.map((place, i) => {
						const keyValue = `${place.city}-${i}`;
						return (
							<li className={styles.offer} key={keyValue}>
								<h1 className={styles.offer__city}>{place.city}</h1>
								<p className={styles.offer__id}>{place.id}</p>
								<p className={styles.offer__name}>{place.name}</p>
								<div className={styles.offer__info}>{place.info}</div>
								<p>{place.price}</p>
							</li>
						);
					})}
				</ul>

				<button onClick={() => sortClickHandle('id')}>Sort by ID!</button>
				<button onClick={() => sortClickHandle('price')}>Sort by PRICE!</button>
			</main>
		</>
	);
};

export default SortFilterCards;
