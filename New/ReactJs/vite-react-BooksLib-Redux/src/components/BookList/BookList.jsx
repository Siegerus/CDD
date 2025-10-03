import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavoriteBook } from '../../redux/books/actionCreators';
import './BookList.scss';

const BookList = () => {
	const books = useSelector(state => state.books);
	const dispath = useDispatch();

	let handleDeleteBook = id => {
		dispath(deleteBook(id));
	};

    let handleToggleFavorite = (id) => {
        dispath(toggleFavoriteBook(id));
    };
        
	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>No books available.</p>
			) : (
				<ul>
					{books.map((book, i) => (
						<li key={book.id}>
							<div className="book-info">
								{++i}. {book.title} by{' '}
								<strong>{book.author} </strong>
							</div>
							<div className="book-actions"  >
                                <span onClick={() => handleToggleFavorite(book.id)}>
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
