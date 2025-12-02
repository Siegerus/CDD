import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Practice2Layout = () => {
	return (
		<>
			<Link to="."> to main-pactice2-page</Link>
			<Link to="first-page">to first-page</Link>
			<Link to="second-page"> to second-page</Link>
			<Link to="dynamic-page"> to dynamic-page</Link>
			<Link to="sort-practice"> to sort-practice</Link>
			<Link to="modal"> to modal</Link>
			<Link to="slider"> to slider</Link>
			<Link to="tabs">to tabs</Link>
			<Link to="accordeon">to accordeon</Link>
			<Link to="sandbox"> to sandbox</Link>
			<main style={{ padding: '60px 0 120px 0' }}>
				<Outlet />
			</main>
		</>
	);
};

export default Practice2Layout;
