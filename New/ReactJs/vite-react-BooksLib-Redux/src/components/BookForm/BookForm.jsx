import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook, addRandomBook } from '../../redux/slices/booksSlice';
import bookArray from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.scss';


const BookForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispath = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (title && author) {
			dispath(addBook(createBookWithId({ title, author })))
		}
		setTitle('');
		setAuthor('');
	};

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * bookArray.length);
		const randomBook = bookArray[randomIndex];

		dispath(addRandomBook(createBookWithId(randomBook)));
	};

	// const handleAddRandomBookByAPI = async () => {
	// 	const response = await fetch('http://localhost:4000/random-book');
	// 	const json = await response.json();
	// 	console.log(json);
	// }

	const handleAddRandomBookByAPI = async () => {        
		try {
			const response = await axios.get('http://localhost:4000/random-boo');
		// if(response.status !== 200) console.log('response error')
		console.log(response);
		} catch (error) {
			console.log(error);
		}                   // запрос с сервера с axios
		
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
