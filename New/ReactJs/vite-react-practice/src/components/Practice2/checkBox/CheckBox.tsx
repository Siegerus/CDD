import React, { ChangeEvent, useEffect, useState } from 'react';

type CheckBox = {
	name: 'first' | 'second' | 'third' | 'fourth';
	isChecked: boolean;
	value: string;
};

const CHECK_ITEMS: CheckBox[] = [
	{ name: 'first', isChecked: false, value: '1' },
	{ name: 'second', isChecked: false, value: '2' },
	{ name: 'third', isChecked: false, value: '3' },
	{ name: 'fourth', isChecked: false, value: '4' },
];

const RIGHT_ANSWERS = [
	{ firstAnswer: false },
	{ firstAnswer: false },
	{ firstAnswer: true },
	{ firstAnswer: false },
];

type Props = {};

const CheckBox = (props: Props) => {
	const [checkValues, setIsCheckValues] = useState({
		first: true,
		second: false,
		third: false,
		fourth: true,
	});

	const [checkItems, setCheckItems] = useState(CHECK_ITEMS);

	const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
		setIsCheckValues((prevItem) => {
			return {
				...prevItem,
				[e.target.name]: e.target.checked,
			};
		});

		setCheckItems(
			checkItems.map((item) => {
				return { ...item, isChecked: checkValues[item.name] };
			})
		);
	};

	useEffect(() => {
		setCheckItems(
			checkItems.map((item) => {
				return { ...item, isChecked: checkValues[item.name] };
			})
		);
	}, [checkValues]);

	return (
		<>
			<form action="">
				{checkItems.map((item: CheckBox, i: number) => {
					const keyValue = `${i}-${Math.floor(Math.random() * 10)}`;
					if (
						item.isChecked === true &&
						item.isChecked === RIGHT_ANSWERS[i].firstAnswer
					)
						console.log('right');
					return (
						<input
							onChange={(e) => inputChangeHandle(e)}
							name={item.name}
							type="checkbox"
							checked={item.isChecked}
							// checked={checkValues[item.name]}
							value={item.value}
							key={keyValue}
							style={{ marginRight: '6px' }}
						/>
					);
				})}
			</form>
		</>
	);
};

export default CheckBox;
