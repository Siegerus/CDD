import React from 'react';
import { FormEvent, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Values, Select } from './Types';

import SelectItem from './SelectItem';
import styles from './select.module.scss';

const SELECT_LIST: Select[] = [
	{ value: Values.value1, isChecked: true, id: uuidv4() },
	{ value: Values.value2, isChecked: false, id: uuidv4() },
	{ value: Values.value3, isChecked: false, id: uuidv4() },
	{ value: Values.value4, isChecked: false, id: uuidv4() },
	{ value: Values.value5, isChecked: false, id: uuidv4() },
];

const CustomSelect = () => {
	const [selects, setSelects] = useState(SELECT_LIST);
	const ref = useRef<HTMLFormElement | null>(null);
	const selectChangeHandle = (idd: string) => {
		setSelects(
			SELECT_LIST.map((select) => {
				return select.id === idd
					? { ...select, isChecked: true }
					: { ...select, isChecked: false };
			})
		);
	};
	async function sendData(data: string) {
		const options = { method: 'POST', body: data };
		const response = await fetch(
			'https://webhook.site/3df4a7df-c4e7-462d-8ebf-aa43d0ca0580',
			options
		);
		const result = await response.text();
		return `Status: ${response.status}, Success: ${response.ok},  ${result}`;
	}
	const submitHandle = (e: FormEvent) => {
		e.preventDefault();
		const selectValue = selects.map((select) => {
			if (select.isChecked) return select.value;
		});
		const formData = selectValue.join('');
		sendData(formData)
			.then((result) => console.log(result))
			.catch((err) => console.error(err));
	};
	return (
		<>
			<div className={styles.select}>
				<div className={styles['select__value-place']}>
					{selects.map((select) => (select.isChecked ? select.value : ''))}
				</div>
				<form className={styles['feed-form']} onSubmit={submitHandle} ref={ref}>
					<ul className={styles.select__list}>
						{selects.map((select, i) => {
							const keyValue = `${select.id}-${i}`;
							return (
								<SelectItem
									key={keyValue}
									checked={select.isChecked}
									value={select.value}
									onSelectChangeHandle={selectChangeHandle}
									id={select.id}
								/>
							);
						})}
					</ul>
					<button type="submit">Send</button>
				</form>
			</div>
		</>
	);
};

export default CustomSelect;
