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
			<Link to="animation-fade">to animation-fade</Link>
			<Link to="use-params-linking"> to use-params-linking</Link>
			<Link to="children"> to children</Link>
			<Link to="sort-filter-cards"> to sort-filter-cards</Link>
			<Link to="todo"> to todo</Link>
			<Link to="BR-tabs"> to BR-tabs</Link>
			<Link to="select"> to select</Link>
			<Link to="clock"> to clock</Link>
			<Link to="use-params-filter"> use-params-filter</Link>
			<Link to="checkbox"> to checkbox</Link>
			<Link to="naming"> to naming</Link>
			<Link to="HOC"> to HOC</Link>
			<Link to="context"> to context</Link>
			<Link to="redux"> to redux</Link>
			<Link to="sort-filter-cards-redux"> to sort-filter-cards-redux</Link>
			<Link to="sort-filter-cards-redux-slices">
				to sort-filter-cards-redux-slices
			</Link>
			<Link to="custom-boolean-component"> to custom-boolean-component</Link>
			<Link to="axios-component"> to axios-component</Link>
			<Link to="validate-component"> to validate-component</Link>
			<Link to="custom-hook-component"> to custom-hook-component</Link>
			<Link to="form"> to form</Link>

			<Link to="sandbox"> to sandbox</Link>
			<main style={{ padding: '60px 0 120px 0' }}>
				<Outlet />
			</main>
		</>
	);
};

export default Practice2Layout;
