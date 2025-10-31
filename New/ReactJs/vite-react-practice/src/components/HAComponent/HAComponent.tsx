import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main';
import About from './pages/about';
import Secret from './pages/secret';
import Layout from './components/layouts/layout';
import PrivateRoute from './components/private-route';
import GoAway from './pages/go-away';

const HAComponent = (): JSX.Element => {
	/* Все пропсы прокидываются компонентам как обычно */
	return (
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> {/* В BrowserRouter оборачивают всё приложение, он должен быть на самом верху  */}
			<Routes> {/* Routes - комонент-кнтейнер для группы маршрутов и Route - сам маршрут*/}
				<Route path='/' element={<Layout/>}> {/* path- путь в адресной строке. В нашем случае от корня */}
					<Route index element={<Main/>}/> {/* index - главный маршрут, который будет совпадать с "path='/'" */}
					<Route path='about/:year' element={<About/>}/> {/* Через ":" указывается параметр. Доступ к этим п-рам есть в "useParams" в к-те*/ }
					<Route path='secret' element={
						<PrivateRoute> {/* В это к-те будет логика рендеринга. Либо ренд-г "children"(<Secret/>), либо переход на др. стр. В этой строке может показывать ошибку из за комментария*/}
							<Secret/>
						</PrivateRoute>
						
					}/>
					<Route path='/go-away' element={<GoAway/>} />
					<Route path='*' element= {   /* элемент отрисуется, если ввести в адресной то, что не совпадёт ни с каким маршрутом (страница 404)*/
						<>
							<h1>Page 404</h1>
							<Link to='/'>to main page</Link>
						</>
					}/>
				</Route> 
			</Routes>
		</BrowserRouter>
	)
}

export default HAComponent