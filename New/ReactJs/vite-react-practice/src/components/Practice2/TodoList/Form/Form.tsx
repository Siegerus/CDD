import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './form.module.scss';

type FormProps = {
	onFormSubmitHandle: (e: FormEvent, value: string) => void;
};

const Form = ({ onFormSubmitHandle }: FormProps) => {
	const [value, setValue] = useState('');

	const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const submitHandle = (e: FormEvent) => {
		onFormSubmitHandle(e, value);
		setValue('');
	};
	return (
		<>
			<h1 className={styles.title}>Enter your note</h1>
			<form className={styles.form} onSubmit={(e) => submitHandle(e)}>
				<input
					className={styles.input}
					value={value}
					type="text"
					onChange={(e) => inputChangeHandle(e)}
				/>
				<button className={styles.button} type="submit">
					Send
				</button>
			</form>
		</>
	);
};

export default Form;
