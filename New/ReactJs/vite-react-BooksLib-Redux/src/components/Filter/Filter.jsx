import { useDispatch, useSelector } from 'react-redux';
import {
	setTitleFilter,
	selectTitleFilter,
	setAuthorFilter,
	selectAuthorFilter,
	setOnlyFavoriteFilter,
	selectOnlyFavoriteFilter,
	resetFilters
} from '../../redux/slices/filterSlice';
import './Filter.scss';
const Filter = () => {
	const dispath = useDispatch();
	const titleFilter = useSelector(
		/* (state) => state.filter.title */ selectTitleFilter // Правильней задавать ф-цию для useSelector в Slice и импортитровать её уже оттуда
	);
	const authorFilter = useSelector(selectAuthorFilter);
	const favoriteFilter = useSelector(selectOnlyFavoriteFilter);

	const handleTitleFilterChange = e => {
		dispath(setTitleFilter(e.target.value));
	};

	const handleAuthorFilterChange = e => {
		dispath(setAuthorFilter(e.target.value));
	};

	const handleOnlyFavoriteFilterChange = () => {
		dispath(setOnlyFavoriteFilter(true));
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
					<label htmlFor="checkbox">
						<input
							id="checkbox"	
							type="checkbox"
							checked={favoriteFilter}
							onChange={handleOnlyFavoriteFilterChange}
						/>
						Only Favorite
					</label>
				</div>
				<button type="button" onClick={handleResetFilters}>Reset Filters</button>	
			</div>
			 
		</div>
	);
};

export default Filter;
