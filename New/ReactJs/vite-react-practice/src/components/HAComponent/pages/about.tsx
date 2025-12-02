import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const About = (): JSX.Element => {
	const params = useParams();
	/* то, что ввести в адресной строке "about/:year" вместо параметра "year", это и попадёт в params.
        params будет в виде объекта {year: "то что ввели в строку"}
    */
	console.log(params);
	return (
		<>
			<Helmet>
				<title>React + Vite About page</title>
			</Helmet>
			<div>Page About</div>
		</>
	);
};

export default About;
