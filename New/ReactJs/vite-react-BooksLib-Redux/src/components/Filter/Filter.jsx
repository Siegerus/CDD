import { useDispatch, useSelector } from 'react-redux';
import {
	setTitleFilter,
	selectTitleFilter,
	resetFilters
} from '../../redux/slices/filterSlice';
import './Filter.scss';
const Filter = () => {
	const dispath = useDispatch();
	const titleFilter = useSelector(
		/* (state) => state.filter.title */ selectTitleFilter
	);

	const handleTitleFilterChange = e => {
		dispath(setTitleFilter(e.target.value));
	};

	const handleResetFolters = () => {
		dispath(resetFilters());
	}

	return (
		<div className="app-block filter">
			<div className="filter-row">
				<div className="filter-group">
					<input
						type="text"
						placeholder="filter by title"
						value={titleFilter}
						onChange={handleTitleFilterChange}
					/>
				</div>
				<button type="button" onClick={handleResetFolters}>Reset Filters</button>	
			</div>
			 
		</div>
	);
};

export default Filter;
