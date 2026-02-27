import React, { ChangeEvent, useState } from 'react';

type Props = {};

type FormData = {
	[key: string]: string;
};

const validValues = {
	user: (val: number) => val < 5,
	password: (val: number) => val < 5,
	email: (val: number) => val < 5,
};

const ValidateComponent = (props: Props) => {
	const [formValues, setFormValues] = useState<FormData>({
		user: '',
		password: '',
		email: '',
	});

	const checkValid = (): string | undefined => {
		const { user, email, password } = formValues;

		// если хоть что, то из этих значений внизу будет true, то в isLenght сразу вернётся это значение с true
		// если все значения будут false , то вернётся последнее (и оно тоже false) и isLenght в итоге тоже false
		const isLenght = user.length || email.length || password.length;
		if (!isLenght) return;

		if (validValues.user(user.length)) return 'to short username';
		else if (validValues.user(password.length)) return 'to short password';
		else if (validValues.email(email.length)) return 'to short email';
	};

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>, name: string) => {
		setFormValues({
			...formValues,
			[name]: e.target.value,
		});
		checkValid();
	};

	return (
		<form style={{ textAlign: 'center' }}>
			<label htmlFor="user">
				Username:
				<input
					type="text"
					name="user"
					id="user"
					value={formValues.user}
					onChange={(e) => onChangeHandle(e, e.target.name)}
				/>
			</label>
			<label htmlFor="password">
				Username:
				<input
					type="text"
					name="password"
					id="password"
					value={formValues.password}
					onChange={(e) => onChangeHandle(e, e.target.name)}
				/>
			</label>
			<label htmlFor="email" style={{ marginBottom: '20px' }}>
				Email:
				<input
					type="text"
					name="email"
					id="email"
					value={formValues.email}
					onChange={(e) => onChangeHandle(e, e.target.name)}
				/>
			</label>
			<div style={{ color: 'lightpink', textAlign: 'center' }}>
				{checkValid()}
			</div>
		</form>
	);
};

export default ValidateComponent;
