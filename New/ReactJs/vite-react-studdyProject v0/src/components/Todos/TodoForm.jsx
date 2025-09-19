import { useState } from 'react';
import styles from './TodoForm.module.scss';
import Button from '../UI/Button';
import TodoList from './TodoList';

let valueArray = [];
function TodoForm() {
	let [values, setValues] = useState({
		inputValue: '',
		listValue: null,
		count: 0
	});
	let onSubmit = e => {
		e.preventDefault();
		if (values.inputValue)
			setValues({
				...values,
				listValue: valueArray.push(values.inputValue),
				count: valueArray.length
			});
	};
	let onInputChange = e => {
		setValues({ ...values, inputValue: e.target.value });
	};
	return (
		<>
			<form onSubmit={onSubmit} className={styles.form}>
				<input
					className={styles.input}
					onChange={onInputChange}
					value={values.inputValue}
				></input>
				<Button />
			</form>
			<TodoList
				valueArray={valueArray}
				inputValue={values.inputValue}
				count={values.count}
			/>
		</>
	);
}
export default TodoForm;
