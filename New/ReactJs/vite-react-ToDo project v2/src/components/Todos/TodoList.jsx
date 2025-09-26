import styles from './TodoList.module.scss';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
	// return ( todos.length > 0 ? (
	//     <div className={styles.TodoListContainer}>
	//         {todos.map((todo, i) => <Todo todo={todo} key ={i}/>)}
	//     </div>
	//     ) : (
	//         <div className={styles.TodoListContainer}>
	//             <h2>List is empty!</h2>
	//          </div>
	//     )
	// )

	return (
		<div className={styles.TodoListContainer}>
			{/* {todos.length == 0 && <h2>List is empty!</h2>} */}
			{!todos.length && <h2>List is empty!</h2>}
			{todos.map(todo => (
				<Todo
					todo={todo}
					key={todo.id}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			))}
		</div>
	);
}
export default TodoList;
