import React from 'react';
import { Helmet } from 'react-helmet-async';
import Inner from '../components/inner';

const num = 123;
const Main = (): JSX.Element => {
	return (
		<>
			<Helmet>
				{' '}
				{/* В Helmet Устаналиваем тег title для хэда каждой страницы */}
				<title>React + Vite Main page</title>
			</Helmet>
			<div>
				<Inner num={num} />
			</div>
		</>
	);
};

export default Main;
