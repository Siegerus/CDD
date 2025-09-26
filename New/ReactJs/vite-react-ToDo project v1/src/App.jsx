import { useState } from 'react';
import './App.scss';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
	let [todos, setTodos] = useState([]);
	let addTodoHandler = (text) => {
		setTodos([...todos, text]);
	}

	let deleteTodoHandler = (i) => {
		setTodos(todos.filter((item, idx) => {
			return idx !== i  ;
		}))
	}

	return (
		<div className="app">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	);
}
export default App;



