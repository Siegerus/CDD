import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<h1>HARouting</h1>
			<nav>
				<Link to="/">Main</Link>{' '}
				{/* Для навигации внутри пр-ения вместо "a" используют "Link"(что бы страницы не перерисовывались)  */}
				<Link to="about">About</Link>
				{/* Для внешних ссылок, как обычно используют "a" */}
				<Link to="secret">Secret</Link>
			</nav>

			<main>
				<Outlet />{' '}
				{/* То, куда будут отрисовываться к-ты при совпадении маршрута */}
			</main>
		</>
	);
};

export default Layout;
