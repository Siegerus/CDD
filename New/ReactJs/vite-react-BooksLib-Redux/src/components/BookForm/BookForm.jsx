import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addRandomBook } from '../../redux/books/actionCreators';
import bookArray from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.scss';


// let arr = [ 
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//     ];

// // console.log(res);


// let res = arr.reduce((obj, item) => {
       
// }, {});

// // console.log(res);


// let useers = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
//   let toGrouped = (arr) => {
//     let grouped = arr.reduce((obj, curent) => {
//         obj[curent.id] = curent;
//         return obj;
//     }, {} );
//     return grouped;
//   };
// //   console.log(toGrouped(useers));




/* let obj = {prop1: 'val1', prop2: 'val2'}
console.log(Object.keys(obj));  */

const BookForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispath = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (title && author) {
			dispath(addBook(createBookWithId({title, author})));
		}
		setTitle('');
		setAuthor('');
	};

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * bookArray.length);
		const randomBook = bookArray[randomIndex];

		dispath(addRandomBook(createBookWithId(randomBook)));
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
				<button type="button" onClick={handleAddRandomBook}>
					Add Random
				</button>
			</form>
		</div>
	);
};

export default BookForm;
