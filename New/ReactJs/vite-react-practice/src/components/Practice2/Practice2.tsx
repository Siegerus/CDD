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
import AnimationFade from './Animation/AnimationFade';
import UseParamsLinking from './UseParams/UseParamsLinking';
import Children from './Children/Children';
import SortFilterCards from './SortFilterCards/SortFilterCards';
import App from './ToDoList2/App';
import BrouserRouterTabs from './BrouserRouterTabs/BrouserRouterTabs';
import { Tab } from './BrouserRouterTabs/BrouserRouterTabs';
import CustomSelect from './Select/Select';
import Clock from './Clock/Clock';
import UseParamsFilter from './UseParamsFilter/UseParamsFilter';
import CheckBox from './checkBox/CheckBox';
import NamingComponent from './Naming/NamingComponent';
import HOCComponent from './HOC/HOCComponent';
import ContextComponent from './Context/Component';
import ReduxComponent from './Reduxx/ReduxComponent';
import SortFilterCardsRedux from './SortFilterCardsRedux/SortFilterCardsRedux';

const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export const TABS = [
	{
		link: `tab1`,
		isIndexed: true,
		title: `Tab#1`,
		content: `Tab#1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ex
    voluptas omnis quibusdam odio veniam veritatis architecto optio vero quae.`,
	},
	{
		link: `tab2`,
		isIndexed: false,
		title: `Tab#2`,
		content: `Tab#2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ex
    voluptas omnis quibusdam odio veniam veritatis architecto optio vero quae.`,
	},
	{
		link: `tab3`,
		isIndexed: false,
		title: `Tab#3`,
		content: `Tab#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ex
    voluptas omnis quibusdam odio veniam veritatis architecto optio vero quae.`,
	},
];

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
					<Route path="animation-fade" element={<AnimationFade />} />
					<Route path="dynamic-page" element={<DinamicLayout />}>
						<Route path=":id" element={<InnerDinamic ids={array} />} />
					</Route>
					<Route path="use-params-linking" element={<UseParamsLinking />}>
						<Route path=":id" element={<UseParamsLinking />} />
						<Route path=":text" element={<UseParamsLinking />} />
						<Route path=":price" element={<UseParamsLinking />} />
					</Route>
					<Route path="children" element={<Children />} />
					<Route path="sort-filter-cards" element={<SortFilterCards />} />
					<Route path="todo" element={<App />} />
					<Route path="select" element={<CustomSelect />} />
					<Route path="clock" element={<Clock />} />
					<Route path="BR-tabs" element={<BrouserRouterTabs tabs={TABS} />}>
						{TABS.map((tab, i) => {
							const keyValue = `${tab.title}-${i}`;
							return (
								<Route
									path={tab.isIndexed ? '' : tab.link}
									key={keyValue}
									element={<Tab content={tab.content} />}
								/>
							);
						})}
					</Route>
					<Route path="use-params-filter" element={<UseParamsFilter />}>
						<Route path=":year" element={<UseParamsFilter />} />
					</Route>
					<Route path="checkbox" element={<CheckBox />} />
					<Route path="naming" element={<NamingComponent />} />
					<Route path="HOC" element={<HOCComponent />} />
					<Route path="context" element={<ContextComponent />} />
					<Route path="redux" element={<ReduxComponent />} />
					<Route
						path="sort-filter-cards-redux"
						element={<SortFilterCardsRedux />}
					/>
					<Route path="sandbox" element={<Sandbox />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Practice2;
