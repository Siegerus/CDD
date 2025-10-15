import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook, addRandomBook, fetchBook /* thunkFunction */ } from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import bookArray from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.scss';

const BookForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (title && author) {
			dispatch(addBook(createBookWithId({ title, author }, 'manual')));
			setTitle('');
			setAuthor('');
		} else {
			dispatch(setError('You must fill title and author'));
		}
	}

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * bookArray.length);
		const randomBook = bookArray[randomIndex];

		dispatch(addRandomBook(createBookWithId(randomBook, 'random')));
	};

	/* const handleAddRandomBookByAPI = async () => {        	     //  Так было бы без отправки асинхронной ф-ции через redux store, но обычно делают thunkFunction
		try {
			const response = await axios.get('http://localhost:4000/random-book');   
			if(response?.data?.author && response?.data?.title) dispatch(addBook(createBookWithId(response.data, 'API')));
		} catch (error) {
			console.log('Error fetching random-book', error);
		} 
	} */

	// const thunkFunction = async (dispatch, getState) => { // thunkFunction. Так отправляется ф-ция через redux store. Вынесли её slices. Сюда уже импортировали.
	// 	try {															
	// 		const response = await axios.get('http://localhost:4000/random-book');   // запрос на сервер с помощью axios
	// 		if(response?.data?.author && response?.data?.title) dispatch(addBook(createBookWithId(response.data, 'API')));
	// 	} catch (error) {
	// 		console.log('Error fetching random-book', error);
	// 	}   
	// 	console.log(getState());
	// }

	const handleAddRandomBookByAPI = async () => {   // вызов thunkFunction в обработчике. Вынесли её slices. Сюда уже только импортировали.
		dispatch(fetchBook('http://localhost:4000/random-book') /* thunkFunction */); // или fetchBook, если thunkFunction интегрирована в slices (корректнее интегрировать)
	}


	return (
		<div className="app-block book-form">
			<h2>Add a New Book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						value={title}
						onChange={e => setTitle(e.target.value)}
						type="text"
						name="title"
					/>
				</div>
				<div>
					<label htmlFor="author">Author</label>
					<input
						id="author"
						value={author}
						onChange={e => setAuthor(e.target.value)}
						type="text"
						name="author"
					/>
				</div>
				<button type="submit">Add Book</button>
				<button type="button" onClick={handleAddRandomBook}>
					Add Random
				</button>
				<button type="button" onClick={handleAddRandomBookByAPI}>Add Random by API</button>
			</form>
		</div>
	);
};

export default BookForm;
