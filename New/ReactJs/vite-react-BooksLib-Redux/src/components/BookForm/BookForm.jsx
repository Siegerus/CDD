import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addRandomBook } from '../../redux/books/actionCreators';
import bookArray from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.scss';


let arra = [1, 2, 3];
function toShaffle(arr) {
    // arr.sort((a,b) => Math.random(a)*10 - Math.random(b)*10); // мой вариант
    // arr.sort(() => Math.random() - 0.5); // чуть более правильный вариант
    for(let i = arr.length - 1; i > 0; i-- ) {debugger// нужный правильный вариант 
       let j = Math.floor(Math.random() * (i + 1));// тут делаем новый случайный индекс от 0 до i
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}
console.log(toShaffle(arra));

// код для проверки случайностей
let showRandom = () => {
    let obj = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    }
    for(let i = 0; i < 10000; i++) {
        let array = [1, 2, 3];
        toShaffle(array);
        obj[array.join("")]++;
    }
    for(let key in obj) {
        // console.log(key + ":" + obj[key]);
    }
};
showRandom();

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
