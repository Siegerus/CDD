import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import Clock from './components/Clock/Clock';
import Drops from './components/Drops/Drops';
import NavMenu from './components/NavMenu/NavMenu';
import MainLayout from './layouts/MainLayout';
import Header from './components/Header/Header';
import './App.scss';

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
		<BrowserRouter 
		future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		  }}>
			<div className="app">
		  		<Routes>
		  			<Route path="/" element={<MainLayout />}>
		  				<Route index element={<Clock />}/>
						<Route path="drops" element={<Drops />}/>
						<Route path="navmenu" element={<NavMenu />}/>
					</Route>
				</Routes>

				
				
				
			</div>
		</BrowserRouter>

	);
}
export default App;
