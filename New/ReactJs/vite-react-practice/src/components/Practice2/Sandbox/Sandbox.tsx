import React, {
	// MouseEvent,
	ChangeEvent,
	FormEvent,
	AnimationEvent,
	useState,
	useEffect,
	ReactNode,
	useRef,
	PropsWithChildren,
	MutableRefObject,
} from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
	MapContainer,
	TileLayer,
	useMap,
} from 'https://cdn.esm.sh/react-leaflet';
import styles from './Sandbox.module.scss';
import books from '../../../data/books.json';
const ENV_CONST = import.meta.env.VITE_TEST_CONST;

type Item = {
	id: string;
	name: 'local' | 'global';
	value: string;
};

const ITEMS: Item[] = [
	{ id: uuidv4(), name: 'local', value: '' },
	{ id: uuidv4(), name: 'global', value: '' },
	{ id: uuidv4(), name: 'global', value: '' },
	{ id: uuidv4(), name: 'local', value: '' },
];

type Point = {
	title: string;
	lat: number;
	lng: number;
};

type City = {
	title: string;
	lat: number;
	lng: number;
	zoom: number;
};

const POINTS: Point[] = [
	{
		title: 'Саундвью',
		lat: 40.816881,
		lng: -73.872768,
	},
	{
		title: 'Ферри Поинт',
		lat: 40.814909,
		lng: -73.830682,
	},
	{
		title: 'Бронкс',
		lat: 40.862413,
		lng: -73.879357,
	},
	{
		title: 'Инвуд-Хилл',
		lat: 40.870817,
		lng: -73.927112,
	},
	{
		title: 'Пелхэм-Бей-Парк',
		lat: 40.877312,
		lng: -73.807182,
	},
];

const CITY: City = {
	title: 'Нью-Йорк',
	lat: 40.835292,
	lng: -73.916236,
	zoom: 10,
};

const Sandbox = () => {
	return (
		<>
			<ul>
				{POINTS.map((point, i) => {
					const keyValue = `${point.title}-${i}`;
					return <li key={keyValue}>{point.title}</li>;
				})}
			</ul>
			<Map city={CITY} />
		</>
	);
};

type MapProps = {
	city: City;
};

const Map = ({ city }: MapProps) => {
	const mapRef = useRef(null);

	// console.log(useMap);

	function useMap(mapRef: null | MutableRefObject<HTMLDivElement>, city: City) {
		const [map, setMap] = useState(null);
		const isRenderedRef = useRef(false);

		useEffect(() => {}, []);

		return map;
	}

	return (
		<>
			<div id="map" ref={mapRef} style={{ height: '500px' }}></div>
		</>
	);
};

export default Sandbox;

// type TargetString = {
// 	key1: 'A';
// 	key2: 'B';
// 	key3: 'C';
// 	key4: 'D';
// };
// const array: TargetString[keyof TargetString][] = ['A', 'B', 'C', 'D'];
// const sortFn = (
// 	arr: TargetString[keyof TargetString][]
// ): TargetString[keyof TargetString][] => {
// 	return arr.sort(
// 		(
// 			a: TargetString[keyof TargetString],
// 			b: TargetString[keyof TargetString]
// 		) => (a < b ? 1 : -1)
// 	);
// };
// console.log(sortFn(array));

// const ItemFirst = () => {
// 	return <p>ItemFirst</p>;
// };
// const ItemSecond = () => {
// 	return <p>ItemSecond</p>;
// };
// const Sandbox = () => {
// 	return (
// 		<>
// 			{ITEMS.map((item) => {
// 				switch (item.name) {
// 					case 'local':
// 						return <ItemFirst />;
// 					case 'global':
// 						return <ItemSecond />;
// 					default:
// 						break;
// 				}
// 			})}
// 		</>
// 	);
// };

// const Sandbox = () => {
// 	const [items, setItems] = useState(ITEMS);

// 	const foo = (val: Item): void => {
// 		setItems(
// 			ITEMS.map((item) => {
// 				return item === val
// 					? { ...val, value: 'clicked' }
// 					: { ...item, value: '' };
// 			})
// 		);
// 		console.log(items);
// 	};

// 	return (
// 		<>
// 			{/* {items.map((item, i) => {
// 				return <div onClick={() => foo(item.id, i)}>{item.id}</div>;
// 			})} */} // при "map" - Если кликнули по эл-ту, который был сделан из массива эл-ов, то меняем именно этот елемент в том массивие
// 			{[
// 				<>
// 					<div onClick={() => foo(ITEMS[0])}>{ITEMS[0].id}</div>
// 					<div onClick={() => foo(ITEMS[1])}>{ITEMS[1].id}</div>
// 					<div onClick={() => foo(ITEMS[2])}>{ITEMS[2].id}</div>
// 					<div onClick={() => foo(ITEMS[3])}>{ITEMS[3].id}</div>
// 				</>,
// 			]}
// 		</>
// 	);
// };
