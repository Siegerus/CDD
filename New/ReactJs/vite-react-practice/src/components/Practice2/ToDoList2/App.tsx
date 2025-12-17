import React, { FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListHeader from './ListHeader/ListHeader';
import ListForm from './ListForm/ListForm';
import ListMain from './ListMain/ListMain';

import './App.scss';

type Todo = {
	text: string | null;
	isComplete: boolean;
	id: string;
};

const App = () => {
	const [todos, setTodos] = useState<Todo[] | undefined>([]);

	const formSubmitHandle = (
		e: FormEvent<HTMLFormElement>,
		formValue: string
	) => {
		e.preventDefault();
		if (!formValue) return;
		setTodos([
			...(todos as Todo[]),
			{ text: formValue, isComplete: false, id: uuidv4() },
		]);
	};

	const removeTodoHandle = (idd: string) => {
		setTodos(
			todos?.filter((todo) => {
				// Была ошибка тс - "Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Todo'.
				// No index signature with a parameter of type 'string' was found on type 'Todo'."
				// Утвердили, что idd точно является св-вом в объекте типа Todo
				localStorage.removeItem(idd);
				if (todo.id === idd) return todo.id === todo[idd as keyof Todo];
				else return todo;
				// Выше намудрил. Ниже вариант в одну строку
				// return todo.id !== idd;
			})
		);
	};

	const removeAllHanle = () => {
		setTodos([]);
		localStorage.clear();
	};

	const setCompleteTodoHandle = (id: string) => {
		setTodos(
			todos?.map((todo) => {
				return todo.id === id
					? { ...todo, isComplete: !todo.isComplete }
					: { ...todo };
			})
		);
	};

	const completeAllHandle = () => {
		setTodos(
			todos?.map((todo) => {
				return { ...todo, isComplete: true };
			})
		);
	};

	useEffect(() => {
		function setStorage() {
			const todosKeysValues = todos?.map((todo, i) => {
				return { id: `${todo.id}:${i}`, text: todo.text };
			});

			const sorted = todosKeysValues?.sort((a, b) => {
				const res = a.id.split(':');
				// console.log(res);
				// return a.order - b.order ? -1 : 1;
			});

			console.log(sorted);

			sorted?.forEach((todoKeyValue) => {
				localStorage.setItem(todoKeyValue.id, todoKeyValue.text!);
			});
		}
		// localStorage.clear();
		setStorage();
	}, [todos]);

	useEffect(() => {
		function getStorage() {
			const initialTodos: Todo[] = [];

			const keys = Object.keys(localStorage);
			for (let key of keys) {
				localStorage.getItem(key);
				initialTodos.push({
					text: localStorage.getItem(key),
					isComplete: false,
					id: key,
				});
			}
			return initialTodos;
		}

		setTodos([...getStorage()]);
	}, []);

	return (
		<>
			<div className="app-wrapper">
				<ListHeader counter={todos?.length} />
				<ListForm onFormSubmitHandle={formSubmitHandle} />
				<ListMain
					todos={todos}
					onRemoveTodoHandle={removeTodoHandle}
					onRemoveAllHanle={removeAllHanle}
					onSetCompleteTodoHandle={setCompleteTodoHandle}
					onCompleteAllHandle={completeAllHandle}
				/>
			</div>
		</>
	);
};

export default App;
