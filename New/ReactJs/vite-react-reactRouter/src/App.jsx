import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
import MainLayout from './layouts/MainLayout';
import './App.scss';

function App() {
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true
			}}
		>
			<div className="app">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contacts" element={<Contacts />} />
						<Route path="courses" element={<Courses />} />
						<Route path="courses/:courseSlug/:lang" element={<SingleCourse />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;
