import React from 'react';
import styles from './select.module.scss';

import { Values } from './Types';

type SelectItemProps = {
	checked: boolean | undefined;
	value: Values;
	id: string;
	onSelectChangeHandle: (idd: string) => void;
};

const SelectItem = ({
	checked,
	value,
	id,
	onSelectChangeHandle,
}: SelectItemProps) => {
	return (
		<li>
			<input
				id={value}
				type="checkbox"
				className={styles.select__input}
				checked={checked}
				value={value}
				onChange={() => onSelectChangeHandle(id)}
			/>
			<label htmlFor={value}>{value}</label>
		</li>
	);
};

export default SelectItem;
