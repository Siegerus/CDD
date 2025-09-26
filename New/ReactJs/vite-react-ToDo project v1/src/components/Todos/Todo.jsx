import { RiArticleFill  } from 'react-icons/ri'
import styles from './Todo.module.scss';
import TodoForm from './TodoForm';

function Todo({todo, deleteTodo, index}) {

	return (
		<div className={styles.todo}>
			<RiArticleFill  className={styles.icon}/>
			<div className={styles.todoText} onDoubleClick={()=> deleteTodo(index)}>{todo}</div>
		</div>
	);
}

export default Todo;
