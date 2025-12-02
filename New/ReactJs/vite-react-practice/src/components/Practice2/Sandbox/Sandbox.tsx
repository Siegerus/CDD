import React, { ChangeEvent, useState } from 'react';
import styles from './Sandbox.module.scss';

const Sandbox = () => {
	const [value, setValue] = useState({ login: '', password: '', email: '' });

	const imputChangeHandle = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setValue({
			...value, // Если не копировать сначала все св-ва объекта value, то изначальный объект value { login: '', password: '', email: '' }
			[target.name]: target.value, // заменится вот этим объектом. А так мы просто поменяли св-ва объекта
		});
	};
	return (
		<form
			style={{ display: 'flex', flexDirection: 'column', maxWidth: '220px' }}>
			<input
				type="text"
				value={value.login}
				name="login"
				onChange={(e) => imputChangeHandle(e)}
			/>
			<input
				type="text"
				value={value.password}
				name="password"
				onChange={(e) => imputChangeHandle(e)}
			/>
			<input
				type="text"
				value={value.email}
				name="email"
				onChange={(e) => imputChangeHandle(e)}
			/>
		</form>
	);
};

export default Sandbox;

// type NavCity = {
// 	city: string;
// 	isActive: boolean;
// };

// type Place = {
// 	id: number;
// 	name: string;
// 	city: string;
// 	info: string;
// };

// const NAV_CITIES: NavCity[] = [
// 	{ city: 'Simferopol', isActive: false },
// 	{ city: 'Sevastopol', isActive: false },
// 	{ city: 'Partenit', isActive: false },
// 	{ city: 'Alushta', isActive: false },
// 	{ city: 'Yalta', isActive: false },
// ];
// const PLACES: Place[] = [
// 	{
// 		id: 1,
// 		name: 'Lorem',
// 		city: 'Simferopol',
// 		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
// 	},
// 	{
// 		id: 2,
// 		name: 'Loripsum',
// 		city: 'Simferopol',
// 		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
// 	},
// 	{
// 		id: 3,
// 		name: 'Lorem ipsum',
// 		city: 'Simferopol',
// 		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum  nulla doloribus placeat!',
// 	},
// 	{
// 		id: 4,
// 		name: 'Lorem',
// 		city: 'Sevastopol',
// 		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
// 	},
// 	{
// 		id: 5,
// 		name: 'Loripsum',
// 		city: 'Sevastopol',
// 		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
// 	},
// 	{
// 		id: 6,
// 		name: 'Lorem ipsum',
// 		city: 'Yalta',
// 		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum  nulla doloribus placeat!',
// 	},
// 	{
// 		id: 7,
// 		name: 'Lor',
// 		city: 'Yalta',
// 		info: 'Lorem ipsum dolor sit!',
// 	},
// 	{
// 		id: 8,
// 		name: 'Loripsum',
// 		city: 'Partenit',
// 		info: 'Lorem ipsum dolor sitet  adipisicing  repellendus nulla doloribus placeat!',
// 	},
// 	{
// 		id: 9,
// 		name: 'Lorem',
// 		city: 'Alushta',
// 		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam illum repellendus nulla doloribus placeat!',
// 	},
// ];

// const Sandbox = () => {
// 	const [navs, setNavs] = useState(NAV_CITIES);

// 	const navClickHandle = (idx: number) => {
// 		setNavs(
// 			NAV_CITIES.map((nav, i) => {
// 				return i == idx
// 					? {
// 							...nav,
// 							isActive: true,
// 					  }
// 					: {
// 							...nav,
// 							isActive: false,
// 					  };
// 			})
// 		);
// 	};

// 	const activeNav = navs.filter((nav) => nav.isActive);
// 	const filteredByCity = PLACES.filter(
// 		(place) => place.city == activeNav[0].city
// 	);

// 	return (
// 		<>
// 			<nav className={styles.nav}>
// 				<ul>
// 					{navs.map((navs, i) => {
// 						const keyValue = `${navs.city}-${i}`;
// 						return (
// 							<li
// 								className={
// 									navs.isActive
// 										? `${styles.navItem} ${styles.navItem_active}`
// 										: styles.navItem
// 								}
// 								key={keyValue}
// 								onClick={() => navClickHandle(i)}>
// 								{navs.city}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</nav>
// 			<main className={styles.wrapper}>
// 				<ul>
// 					{filteredByCity.map((place, i) => {
// 						const keyValue = `${place.city}-${i}`;
// 						return (
// 							<li className={styles.offer} key={keyValue}>
// 								<h1 className={styles.offer__city}>{place.city}</h1>
// 								<p className={styles.offer__id}>{place.id}</p>
// 								<p className={styles.offer__name}>{place.name}</p>
// 								<div className={styles.offer__info}>{place.info}</div>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</main>
// 		</>
// 	);
// };

// export default Sandbox;

// // Main
// const Sandbox = () => {
// 	const [navs, setNavs] = useState(NAV_CITIES);
// 	// const [currentCity, setCurrentCity] = useState('');

// 	const activeNav = navs.filter((nav) => nav.isActive);
// 	const filteredByCity = activeNav
// 		? PLACES.filter((place) => place.city === activeNav[0]?.city)
// 		: PLACES;

// 	const [sortedPlaces, setSortedPlaces] = useState(filteredByCity);

// 	const navHoverHandle = (idx: number, city: string) => {
// 		// setCurrentCity(city);
// 		setNavs(
// 			NAV_CITIES.map((navCity, i) => {
// 				return idx === i
// 					? { ...navCity, isActive: true }
// 					: { ...navCity, isActive: false };
// 			})
// 		);
// 	};

// 	const sortClickHandle = () => {
// 		const sorted = filteredByCity.sort((a, b) => (a.id < b.id ? 1 : -1));
// 		// console.log(sorted);
// 		setSortedPlaces([...sorted]);
// 	};

// 	return (
// 		<>
// 			<nav className={styles.nav}>
// 				<ul>
// 					<NavItem navs={navs} onNavHover={navHoverHandle} />
// 				</ul>
// 			</nav>
// 			<div className={styles.wrapper}>
// 				<ul>
// 					{(filteredByCity.length > 0 ? filteredByCity : PLACES).map(
// 						(place, i) => {
// 							const keyValue = `${place.name}-${i}`;
// 							return (
// 								<Offer
// 									id={place.id}
// 									name={place.name}
// 									city={place.city}
// 									info={place.info}
// 									key={keyValue}
// 								/>
// 							);
// 						}
// 					)}
// 				</ul>
// 			</div>
// 			<SortList onSortClick={sortClickHandle} />
// 		</>
// 	);
// };

// export default Sandbox;
// // ---------------

// // NavItem
// type NavItemProps = {
// 	navs: NavCity[];
// 	onNavHover: (i: number, city: string) => void;
// };

// const NavItem = ({ navs, onNavHover }: NavItemProps) => {
// 	return (
// 		<>
// 			{navs.map((nav, i) => {
// 				const keyValue = `${nav.city}-${i}`;
// 				return (
// 					<li
// 						className={
// 							nav.isActive
// 								? `${styles.navItem} ${styles.navItem_active}`
// 								: styles.navItem
// 						}
// 						key={keyValue}
// 						onClick={() => onNavHover(i, nav.city)}>
// 						{nav.city}
// 					</li>
// 				);
// 			})}
// 		</>
// 	);
// };
// // ---------------

// //Offer
// type OfferTypes = Place;

// const Offer = ({ id, name, city, info }: OfferTypes) => {
// 	return (
// 		<li className={styles.offer}>
// 			<h1 className={styles.offer__city}>{city}</h1>
// 			<p className={styles.offer__id}>{id}</p>
// 			<p className={styles.offer__name}>{name}</p>
// 			<div className={styles.offer__info}>{info}</div>
// 		</li>
// 	);
// };
// // ---------------

// type SortListProps = {
// 	onSortClick: () => void;
// };
// const SortList = ({ onSortClick }: SortListProps) => {
// 	return (
// 		<>
// 			<ul className={styles.sortList}>
// 				<li>
// 					<button className="sort-button" onClick={onSortClick}>
// 						Low to height
// 					</button>
// 				</li>
// 				<li>
// 					<button className="sort-button">Height to low</button>
// 				</li>
// 				<li>
// 					<button className="sort-button">Filter</button>
// 				</li>
// 			</ul>
// 		</>
// 	);
// };

// // Main
// const Sandbox = () => {
// 	const [navs, setNavs] = useState(NAV_CITIES);
// 	// const [currentCity, setCurrentCity] = useState('');

// 	const activeNav = navs.filter((nav) => nav.isActive);
// 	const filteredByCity = activeNav
// 		? PLACES.filter((place) => place.city === activeNav[0]?.city)
// 		: PLACES;

// 	const [sortedPlaces, setSortedPlaces] = useState(filteredByCity);

// 	const navHoverHandle = (idx: number, city: string) => {
// 		// setCurrentCity(city);
// 		setNavs(
// 			NAV_CITIES.map((navCity, i) => {
// 				return idx === i
// 					? { ...navCity, isActive: true }
// 					: { ...navCity, isActive: false };
// 			})
// 		);
// 	};

// 	const sortClickHandle = () => {
// 		const sorted = filteredByCity.sort((a, b) => (a.id < b.id ? 1 : -1));
// 		// console.log(sorted);
// 		setSortedPlaces([...sorted]);
// 	};

// 	return (
// 		<>
// 			<nav className={styles.nav}>
// 				<ul>
// 					<NavItem navs={navs} onNavHover={navHoverHandle} />
// 				</ul>
// 			</nav>
// 			<div className={styles.wrapper}>
// 				<ul>
// 					{(filteredByCity.length > 0 ? filteredByCity : PLACES).map(
// 						(place, i) => {
// 							const keyValue = `${place.name}-${i}`;
// 							return (
// 								<Offer
// 									id={place.id}
// 									name={place.name}
// 									city={place.city}
// 									info={place.info}
// 									key={keyValue}
// 								/>
// 							);
// 						}
// 					)}
// 				</ul>
// 			</div>
// 			<SortList onSortClick={sortClickHandle} />
// 		</>
// 	);
// };

// export default Sandbox;
// // ---------------

// // NavItem
// type NavItemProps = {
// 	navs: NavCity[];
// 	onNavHover: (i: number, city: string) => void;
// };

// const NavItem = ({ navs, onNavHover }: NavItemProps) => {
// 	return (
// 		<>
// 			{navs.map((nav, i) => {
// 				const keyValue = `${nav.city}-${i}`;
// 				return (
// 					<li
// 						className={
// 							nav.isActive
// 								? `${styles.navItem} ${styles.navItem_active}`
// 								: styles.navItem
// 						}
// 						key={keyValue}
// 						onClick={() => onNavHover(i, nav.city)}>
// 						{nav.city}
// 					</li>
// 				);
// 			})}
// 		</>
// 	);
// };
// // ---------------

// //Offer
// type OfferTypes = Place;

// const Offer = ({ id, name, city, info }: OfferTypes) => {
// 	return (
// 		<li className={styles.offer}>
// 			<h1 className={styles.offer__city}>{city}</h1>
// 			<p className={styles.offer__id}>{id}</p>
// 			<p className={styles.offer__name}>{name}</p>
// 			<div className={styles.offer__info}>{info}</div>
// 		</li>
// 	);
// };
// // ---------------

// type SortListProps = {
// 	onSortClick: () => void;
// };
// const SortList = ({ onSortClick }: SortListProps) => {
// 	return (
// 		<>
// 			<ul className={styles.sortList}>
// 				<li>
// 					<button className="sort-button" onClick={onSortClick}>
// 						Low to height
// 					</button>
// 				</li>
// 				<li>
// 					<button className="sort-button">Height to low</button>
// 				</li>
// 				<li>
// 					<button className="sort-button">Filter</button>
// 				</li>
// 			</ul>
// 		</>
// 	);
// };
