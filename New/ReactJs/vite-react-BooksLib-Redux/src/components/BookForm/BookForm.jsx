import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './BookForm.scss';
import { addBook } from '../../redux/books/actionCreators';

const BookForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispath = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (title && author) {
			const book = {
				title: title,
				author: author
			};

			dispath(addBook(book));
		}
		setTitle('');
		setAuthor('');
	};

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
			</form>
		</div>
	);
};

export default BookForm;
