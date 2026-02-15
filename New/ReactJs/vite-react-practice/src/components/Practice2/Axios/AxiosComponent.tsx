import React from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import { selectorData } from './selectors';
import { fetchData, axiosSlice } from './slices';

type AxiosComponentProps = {};

const AxiosComponent = (props: AxiosComponentProps) => {
	const data = useAppSelector(selectorData);
	const dispatch = useAppDispatch();

	const buttonClickHandle = () => {
		dispatch(fetchData());
	};

	return (
		<>
			<div>{data}</div>
			<button onClick={() => buttonClickHandle()} type="button">
				Get data
			</button>
		</>
	);
};

export default AxiosComponent;
