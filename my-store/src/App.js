import { Route, Routes } from 'react-router';
import Home from './components/routes/home/home.component.jsx';
import Navigation from './components/routes/navigation/navigation.component.jsx';
import SignIn from './components/routes/sign-in/sign-in.component.jsx';

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
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);

	// return <Directory categories={categories} />;
};

export default App;
