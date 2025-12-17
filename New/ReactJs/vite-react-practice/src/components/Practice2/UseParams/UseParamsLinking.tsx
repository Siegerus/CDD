import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './use-params.module.scss';

type Box = {
	id: number;
	text: string;
	price: number;
};

type ParamsType = 'id' | 'text' | 'price'; // тип для индексации

const BOXES: Box[] = [
	{ id: 1, text: 'cbox', price: 300 },
	{ id: 2, text: 'bbox', price: 100 },
	{ id: 3, text: 'abox', price: 200 },
];

const UseParamsLinking = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [sortedBoxes, setSortedBoxes] = useState(BOXES);

	const sortingByParams = (params: ParamsType) => {
		// TS выдавал ошибку "Element implicitly has an 'any' type because expression of type 'any' can't be used to index type"
		// Решение - задать для "params" не просто string, а указать конкретные значения (определили в ParamsType)
		const sorted = BOXES.sort((a, b) => {
			return a[params] < b[params] ? -1 : 1;
		});
		setSortedBoxes([...sorted]);
	};

	const linkArray: ParamsType[] = ['id'];

	const onBoxClickHAndle = (link: ParamsType) => {
		linkArray.splice(0);
		linkArray.push(link);
		navigate(link);
	};

	useEffect(() => {
		sortingByParams(params[linkArray.join()] as ParamsType); // тут вызываем ф-цию явно задавая тип через "as"
	}, [params]);

	return (
		<>
			{sortedBoxes.map((box, i) => {
				return (
					<div className={styles.box} key={i + box.text}>
						<p>id: {box.id}</p>
						<p>price: {box.price}</p>
						<p>text: {box.text}</p>
					</div>
				);
			})}

			<button onClick={() => onBoxClickHAndle('id')}>Sort by id</button>
			<button onClick={() => onBoxClickHAndle('text')}>
				Sort by inner text
			</button>
			<button onClick={() => onBoxClickHAndle('price')}>Sort by price</button>
		</>
	);
};

export default UseParamsLinking;
