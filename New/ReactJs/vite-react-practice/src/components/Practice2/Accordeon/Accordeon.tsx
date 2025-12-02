import React, { useState } from 'react';
import styles from './accordeon.module.scss';

type AccordeonItem = {
	id: number;
	name: string;
	content: string;
	isActive: boolean;
};

const ACCORDEON_ITEMS = [
	{
		id: 1,
		name: 'Content#1',
		content:
			'#1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis inventore eveniet, earum, quis quibusdam ex doloribus est odit, soluta reprehenderit!',
		isActive: false,
	},
	{
		id: 2,
		name: 'Content#2',
		content:
			'#2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis inventore eveniet, earum, quis quibusdam ex doloribus est odit, soluta reprehenderit!',
		isActive: false,
	},
	{
		id: 3,
		name: 'Content#3',
		content:
			'#3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis inventore eveniet, earum, quis quibusdam ex doloribus est odit, soluta reprehenderit!',
		isActive: false,
	},
	{
		id: 4,
		name: 'Content#4',
		content:
			'#4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis inventore eveniet, earum, quis quibusdam ex doloribus est odit, soluta reprehenderit!',
		isActive: false,
	},
	{
		id: 5,
		name: 'Content#5',
		content:
			'#5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore veritatis inventore eveniet, earum, quis quibusdam ex doloribus est odit, soluta reprehenderit!',
		isActive: false,
	},
];

// Accordeon Main
type AccordeonProps = {};

const Accordeon = (props: AccordeonProps) => {
	const [accordeonItems, setAccordeonItems] = useState(ACCORDEON_ITEMS);

	const accordeonItemsClickHandle = (idx: number) => {
		// debugger;
		setAccordeonItems(
			accordeonItems.map((item, i) => {
				return i === idx
					? { ...item, isActive: !item.isActive }
					: { ...item, isActive: false };
			})
		);
	};

	return (
		<ul className={styles.wrapper}>
			{accordeonItems.map((item, i) => {
				const keyValue = `${item.name}-${i}`;
				return (
					<li
						style={item.isActive ? { minHeight: '188px' } : { minHeight: '0' }}
						key={`${keyValue}-${i}`}>
						<AccordeonItem
							name={item.name}
							content={item.content}
							key={keyValue}
							isActive={item.isActive}
							onAccordeonItemsClickHandle={accordeonItemsClickHandle}
							idx={i}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default Accordeon;
// --------------------

// Item
type itemProps = Omit<AccordeonItem, 'id'> & {
	onAccordeonItemsClickHandle: (idx: number) => void;
	idx: number;
};

const AccordeonItem = ({
	name,
	content,
	isActive,
	onAccordeonItemsClickHandle,
	idx,
}: itemProps) => {
	return (
		<>
			<div
				className={
					isActive ? `${styles.item} ${styles.item_active}` : styles.item
				}
				onClick={() => onAccordeonItemsClickHandle(idx)}>
				{name}
			</div>
			{isActive && <p className={styles.content}>{content}</p>}
			{
				// <li
				// 	className={styles.content}
				// 	style={isActive ? { height: '150px' } : { height: '0' }}>
				// 	{content}
				// </li>
			}
		</>
	);
};
// --------------------
// style={
// 	isActive
// 		? {
// 				minHeight: '150px',
// 			}
// 		: {
// 				minHeight: '0',
// 			}
// }
