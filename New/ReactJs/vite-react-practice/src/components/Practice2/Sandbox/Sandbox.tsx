import React, {
	MouseEvent,
	ChangeEvent,
	FormEvent,
	AnimationEvent,
	useState,
	useEffect,
	ReactNode,
	useRef,
	PropsWithChildren,
	MutableRefObject,
	useContext,
} from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import styles from './Sandbox.module.scss';
import books from '../../../data/books.json';

const ENV_CONST = import.meta.env.VITE_TEST_CONST;

import {
	useAppDispatch,
	useAppSelector,
	valuesSelector,
} from './store/reducers/boxValueReducer';
import addValue from './store/actionCreators/addValue';
import resetValue from './store/actionCreators/resetValue';

// type Item = {
// 	id: string;
// 	name: 'local' | 'global';
// 	value: number;
// 	isActive: boolean;
// };

// const ITEMS: Item[] = [
// 	{ id: uuidv4(), name: 'local', value: 1, isActive: true },
// 	{ id: uuidv4(), name: 'global', value: 2, isActive: false },
// 	{ id: uuidv4(), name: 'global', value: 3, isActive: false },
// 	{ id: uuidv4(), name: 'local', value: 4, isActive: false },
// 	{ id: uuidv4(), name: 'local', value: 5, isActive: false },
// 	{ id: uuidv4(), name: 'local', value: 6, isActive: false },
// 	{ id: uuidv4(), name: 'local', value: 7, isActive: false },
// ];

const Sandbox = () => {
	const [formValue, setFormValue] = useState('');

	const dispatch = useAppDispatch();
	const values = useAppSelector(valuesSelector);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addValue(formValue));
		setFormValue('');
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue(e.target.value);
	};

	const handleResetButtonClick = () => {
		dispatch(resetValue());
	};

	return (
		<>
			<div className="value-box">{values}</div>
			<form onSubmit={handleFormSubmit}>
				<input value={formValue} onChange={handleInputChange} type="text" />
				<button type="submit">Submit</button>
				<button onClick={handleResetButtonClick} type="button">
					Reset
				</button>
			</form>
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
