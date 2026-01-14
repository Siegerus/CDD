import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import books from '../../../data/books.json';
type Book = {
	author: string;
	title: string;
	year: number;
};

const UseParamsFilter = () => {
	const params = useParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [filteredBooks, setFilteredBooks] = useState(books);

	// const toFilter = (key: string | null, books: Book[]) => {
	// 	if (key) {
	// 		// console.log('key');
	// 		const filteredByYear = books.filter((book: Book): boolean | undefined => {
	// 			return book.year === parseInt(key); // привели параметры, вводдимые в адресную строку к числу,что бы  ts не ругался
	// 		});
	// 	} else return books;
	// };

	// useEffect(() => {
	// 	setKey(params.year as string);
	// 	setFilteredBooks(toFilter(key, books));
	// 	console.log(key);
	// }, [params]);

	// const [filteredBooks, setFilteredBooks] = useState(toFilter(key, books));

	useEffect(() => {
		if (params.year) {
			setFilteredBooks(
				books.filter((book: Book): boolean => {
					return book.year === parseInt(params.year as string);
				})
			);
		} else setFilteredBooks(books);
	}, [params]);

	const navigateButtonHandle = () => {
		navigate(`${pathname}/1958`);
	};

	return (
		<>
			<ul style={{ margin: '0', marginLeft: '21px' }}>
				{filteredBooks.map((book, i) => {
					const keyValue = `${i}-${book.author}`;
					return (
						<li
							key={
								keyValue
							}>{`${book.author} : ${book.title} (${book.year})`}</li>
					);
				})}
			</ul>
			<button type="button" onClick={navigateButtonHandle}>
				Navigate
			</button>
		</>
	);
};

export default UseParamsFilter;
