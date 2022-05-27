import { Route, Routes } from 'react-router';
import Home from './components/routes/home/home.component.jsx';
import Navigation from './components/routes/navigation/navigation.component.jsx';

const Shop = () => {
	return (
		<div>
			<h1>Shop Here</h1>
		</div>
	);
};
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);

	// return <Directory categories={categories} />;
};

export default App;
