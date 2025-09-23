import { useState } from 'react';
import './App.scss';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import Clock from './components/Clock/Clock';
import Drops from './components/Drops/Drops';
import NavMenu from './components/NavMenu/NavMenu';

// function App() {
// 	let [todos, setTodos] = useState([]);
// 	let addTodoHandler = (text) => {
// 		setTodos([...todos, text]);
// 	}

// 	return (
// 		<div className="app">
// 			<h1>Todo App</h1>
// 			<TodoForm addTodo={addTodoHandler} />
// 			<TodoList todos={todos} />
// 		</div>
// 	);
// }
// export default App;

function App() {
	return (
		<div className="app">
			<Clock />
			<Drops />
			<NavMenu />
		</div>
	);
}
export default App;
