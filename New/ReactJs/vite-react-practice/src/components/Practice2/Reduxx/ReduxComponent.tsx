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
	JSXElementConstructor,
} from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import store from './store/store';
import setActiveItem from './store/actionCreators/setActiveItem';
import { ITEMS, Item } from './consts';
import { State, AppDispatch } from './types/state';
import { selectItems } from './store/reducers/itemReducer';

import './ReduxComponent.module.scss';

const ReduxComponent = () => {
	// Обёртки нужны для типизации, что тс подсказывал, что мы можем делать, а что не можем
	// Обёртка для хука useDispatch, что бы мы не могли диспачнуть действие, которое не создавали.(Мы получаем тип ф-ии, которая осуществояет отправку димпатча)
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();

	// Обёртка для useSelector. "TypedUseSelectorHook" Специальный интерфейс от redux. Указываем для него наш тип хранилища - State.
	// В итоге, благодаря обёрткам, мы используем не просто абстрактные хуки, а хуки, которые точно всё знают о нашем хранилище.
	const useAppSelector: TypedUseSelectorHook<State> = useSelector;

	// HA Селектят из хранилища тут:
	// const items = useAppSelector((state) => state.items);

	// Udemy - в файле с редаксом и импортируют:
	const items = useAppSelector(selectItems);

	const handleItemClick = (idx: number) => {
		dispatch(setActiveItem(idx));
	};
	return (
		<>
			<ul>
				{items.map((item: Item, i: number): ReactNode => {
					return (
						<li
							onClick={() => handleItemClick(i)}
							style={{ color: item.isActive ? 'red' : '' }}
							key={item.id}>
							{item.id}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ReduxComponent;

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
