import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './BookForm.scss';
import { addBook, addRandomBook } from '../../redux/books/actionCreators';
import bookArray from '../../data/books.json';

const BookForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispath = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (title && author) {
			const book = {
                id: uuidv4(),
				title: title,
				author: author
			};
			dispath(addBook(book));
		}
		setTitle('');
		setAuthor('');
	};

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * bookArray.length);
        const randomBook = bookArray[randomIndex];
        const randomBookWithId = {
            ...randomBook,
            id: uuidv4()
        }
        dispath(addRandomBook(randomBookWithId));
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
                <button type="button" onClick={handleAddRandomBook}>Add Random</button>
			</form>
		</div>
	);
};

export default BookForm;
