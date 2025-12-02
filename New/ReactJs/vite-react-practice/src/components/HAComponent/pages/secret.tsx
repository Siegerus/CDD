import React from 'react';
import { Helmet } from 'react-helmet-async';

const Secret = (): JSX.Element => {
	return (
		<>
			<Helmet>
				<title>React + Vite Secret page</title>
			</Helmet>
			<div>Secret</div>
		</>
	);
};

export default Secret;
