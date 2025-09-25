import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<NavLink
				to="."
				className={({ isActive }) =>
					isActive ? 'activeLink anotherLink' : ''
				}
				end
			>
				Home
			</NavLink>
			<NavLink
				to="about"
				style={({ isActive }) =>
					isActive
						? { color: 'lightcoral', textDecoration: 'none' }
						: {}
				}
			>
				About
			</NavLink>
			<NavLink
				to="contacts"
				className={({ isActive }) => (isActive ? 'activeLink' : '')}
			>
				Contacts
			</NavLink>
			<NavLink
				to="courses"
				className={({ isActive }) => (isActive ? 'activeLink' : '')}
			>
				Courses
			</NavLink>
		</nav>
	);
};

export default Menu;
