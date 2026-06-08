import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './validation.module.scss';

type FormFields = {
	name: string;
	password: string;
	email: string;
};

type ValidationRules<T> = {
	[K in keyof T]: (value: string) => string;
};

const validation: ValidationRules<FormFields> = {
	name: (value: string) =>
		value.length < 3 ? 'Имя должно быть больше 3 символов 1' : '',
	password: (value: string) =>
		value.length < 4 ? 'Пароль должен быть больше 4 символов 2' : '',
	email: (value: string) =>
		value.length < 5 ? 'Почта должна быть больше 5 символов 3' : '',
};

const Validation = () => {
	const [values, setValues] = useState<FormFields>({
		name: '',
		password: '',
		email: '',
	});
	const [errors, setErrors] = useState<FormFields>({
		name: '',
		password: '',
		email: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const field = name as keyof FormFields;

		setValues((prev) => ({
			...prev,
			[field]: value,
		}));

		setErrors((prev) => ({
			...prev,
			[field]: validation[field](value),
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors: Record<string, string> = {};
		const fields = Object.keys(values) as (keyof FormFields)[];

		fields.forEach((field) => {
			const error = validation[field](values[field]);
			if (error) errors[field] = error;
		});

		setErrors(errors as FormFields);

		if (Object.values(errors).length) return;
		console.log('submit');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				id="name"
				name="name"
				type="text"
				value={values.name}
				onChange={handleInputChange}
			/>
			<p className={styles.error}>{errors.name}</p>
			<input
				id="password"
				name="password"
				type="text"
				value={values.password}
				onChange={handleInputChange}
			/>
			<p className={styles.error}>{errors.password}</p>
			<input
				id="email"
				name="email"
				type="text"
				value={values.email}
				onChange={handleInputChange}
			/>
			<p className={styles.error}>{errors.email}</p>
			<button type="submit">Send</button>
		</form>
	);
};

export default Validation;
