import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './list-form.module.scss';

type ListFormProps = {
	onFormSubmitHandle: (
		e: FormEvent<HTMLFormElement>,
		formValue: string
	) => void;
};

const ListForm = ({ onFormSubmitHandle }: ListFormProps) => {
	const [value, setValue] = useState('');

	const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		onFormSubmitHandle(e, value);
		setValue('');
	};
	return (
		<>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className={styles.wrapper}>
					<input
						className={styles.input}
						type="text"
						value={value}
						onChange={(e) => inputChangeHandle(e)}
					/>
					<button className={styles.button}>Send</button>
				</div>
			</form>
		</>
	);
};

export default ListForm;
