import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import {
	deleteBook,
	toggleFavoriteBook
} from '../../redux/books/actionCreators';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
import './BookList.scss';

const BookList = () => {
	const books = useSelector(state => state.books);
	const titleFilter = useSelector(selectTitleFilter);
	const authorFilter = useSelector(selectAuthorFilter);
	const OnlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
	const dispath = useDispatch();

	let handleDeleteBook = id => {
		dispath(deleteBook(id));
	};

	let handleToggleFavorite = id => {
		dispath(toggleFavoriteBook(id));
	};

	const filteredBooks = books.filter(book => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase());
		const matchesAuthor = book.author 
			.toLowerCase()
			.includes(authorFilter.toLowerCase());
		const matchesFavorite = OnlyFavoriteFilter ? book.isFavorite : true;
		
		return matchesTitle && matchesAuthor && matchesFavorite;
		
	});

	const highlightMatch = (text, filter) => {
		if (!filter) return text;
		const regex = new RegExp(`(${filter})`, 'gi');
		return text.split(regex).map((substr, i) => {
			if(substr.toLowerCase() === filter.toLowerCase()) {
				return (
					<span key={i} className="highlight">{substr}</span>
				)
			}
			return substr;
		});
	}

	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>No books available.</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => (
						<li key={book.id}>
							<div className="book-info">
								{++i}. {highlightMatch(book.title, titleFilter)} by{' '}
								<strong>{highlightMatch(book.author, authorFilter)} </strong>
							</div>
							<div className="book-actions">
								<span
									onClick={() =>
										handleToggleFavorite(book.id)
									}
								>
									{book.isFavorite ? (
										<BsBookmarkStarFill className="star-icon" />
									) : (
										<BsBookmarkStar className="star-icon" />
									)}
								</span>
								<div className="action-button">
									<button
										onClick={() =>
											handleDeleteBook(book.id)
										}
									>
										Delete
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default BookList;
