import { useDispatch, useSelector } from 'react-redux';
import {
	setTitleFilter,
	selectTitleFilter,
	setAuthorFilter,
	selectAuthorFilter,
	setFavoriteFilter,
	selectFavoriteFilter,
	resetFilters
} from '../../redux/slices/filterSlice';
import './Filter.scss';
const Filter = () => {
	const dispath = useDispatch();
	const titleFilter = useSelector(
		/* (state) => state.filter.title */ selectTitleFilter // Правильней задавать ф-цию для useSelector в Slice и импортитровать её уже оттуда
	);
	const authorFilter = useSelector(selectAuthorFilter);
	const favoriteFilter = useSelector(selectFavoriteFilter);

	const handleTitleFilterChange = e => {
		dispath(setTitleFilter(e.target.value));
	};

	const handleAuthorFilterChange = e => {
		dispath(setAuthorFilter(e.target.value));
	};

	const handleFavoriteFilter = () => {
		dispath(setFavorite(true));
	}

	const handleResetFilters = () => {
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
				<div className="filter-group">
					<input
						type="text"
						placeholder="filter by author"
						value={authorFilter}
						onChange={handleAuthorFilterChange}
					/>
				</div>
				<div className="filter-group">
					<input
						type="checkbox"
						placeholder="filter by author"
						value={favoriteFilter}
						onChange={handleFavoriteFilter}
					/>
				</div>
				<button type="button" onClick={handleResetFilters}>Reset Filters</button>	
			</div>
			 
		</div>
	);
};

export default Filter;
