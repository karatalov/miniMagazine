import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Basket from './Components/Basket/Basket'

function App() {
	const routers = [
		{ id: 1, path: '/', element: <Hero /> },
		{ id: 2, path: '/basket', element: <Basket /> },
	]
	return (
		<>
			<Header />
			<Routes>
				{routers.map((el) => (
					<Route path={el.path} element={el.element} key={el.id} />
				))}
			</Routes>
		</>
	)
}

export default App
