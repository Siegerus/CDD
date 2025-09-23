import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
	let [todos, setTodos] = useState([]);
	let addTodoHandler = text => {
		let newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4()
		};
		setTodos([...todos, newTodo]);
	};

	let deleteTodoHandler = id => {
		setTodos(
			todos.filter(todo => {
				return todo.id !== id;
			})
		);
	};

	let toggleTodoHandler = id => {
		setTodos(
			todos.map(todo => {
				if (todo.id == id) {
					return {
						...todo,
						isCompleted: !todo.isCompleted
					};
				} else return { ...todo };
			})
		);
	};

	let resetTodosHandler = () => {
		setTodos([]);
	};

	let deleteCompletedTodosHandler = () => {
		setTodos(todos.filter(todo => !todo.isCompleted));
	};

	let completedTodosCount = todos.filter(
		(todo, i) => todo.isCompleted
	).length;

	return (
		<div className="app">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			{!!todos.length && (
				<TodosActions
					completedTodosExist={!!completedTodosCount}
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodosHandler}
				/>
			)}

			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{completedTodosCount > 0 && <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2> } 
		</div>
	);
}
export default App;
