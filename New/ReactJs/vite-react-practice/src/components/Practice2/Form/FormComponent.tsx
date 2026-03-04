import React, { ChangeEvent, useState } from 'react';

type Props = {};

const formValues = ['Alex', 'Smith', 'Snow', 'Alice'];

const FormComponent = (props: Props) => {
	const [values, setValues] = useState<string[]>(['', '', '', '']);

	const inputChangeHandle = (value: string, idx: number) => {
		const newValues = [...values];
		newValues[idx] = value;
		setValues(newValues);
	};
	return (
		<>
			{values.map((value, i) => {
				const keyValue = `key-${i}`;
				return (
					<input
						name="user"
						value={value}
						key={keyValue}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							inputChangeHandle(e.target.value, i)
						}
					/>
				);
			})}
		</>
	);
};

export default FormComponent;
