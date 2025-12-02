import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Practice2Layout from './Practice2Layout';
import InnerDinamic from './InnerDinamic';
import DinamicLayout from './DinamicLayout';
import SortList from './SortList/SortList';
import Modal from './Modal/Modal';
import Slider from './Slider/Slider';
import Sandbox from './Sandbox/Sandbox';
import Tabs from './Tabs/Tabs';
import Accordeon from './Accordeon/Accordeon';

const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Practice2 = () => {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Routes>
				<Route path="/practice2" element={<Practice2Layout />}>
					<Route index element={<p>index page</p>} />
					<Route path="first-page" element={<FirstPage />} />
					<Route path="second-page" element={<SecondPage />} />
					<Route path="sort-practice" element={<SortList />} />
					<Route path="modal" element={<Modal />} />
					<Route path="slider" element={<Slider />} />
					<Route path="tabs" element={<Tabs />} />
					<Route path="accordeon" element={<Accordeon />} />
					<Route path="dynamic-page" element={<DinamicLayout />}>
						<Route path=":id" element={<InnerDinamic ids={array} />} />
					</Route>
					<Route path="sandbox" element={<Sandbox />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Practice2;
