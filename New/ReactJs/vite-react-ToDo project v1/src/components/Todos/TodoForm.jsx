import { useState } from 'react';
import styles from './TodoForm.module.scss';


function TodoForm({addTodo}) {
	let [value, setValue] = useState('');
	let onInputChange = (e) => {
		setValue(e.target.value);
	}
	let onSubmitHandler = (e) => {
		e.preventDefault();
		if(!value) return;
		addTodo(value);
		setValue('');
	}
	return (
		<div className={styles.container}>
			<form onSubmit={onSubmitHandler}> 
				<input type="text" placeholder="Enter new Todo" onChange={onInputChange} value={value} />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default TodoForm;
