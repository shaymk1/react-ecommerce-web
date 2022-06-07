import { Route, Routes } from 'react-router';
import Authentication from './components/routes/authentication/Authentication.jsx';
import Home from './components/routes/home/home.component.jsx';
import Navigation from './components/routes/navigation/navigation.component.jsx';

import CheckOut from 'components/routes/checkout/CheckOut.jsx';

import Shop  from '../src/components/routes/shop/Shop.jsx'


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<CheckOut />} />
			</Route>
		</Routes>
	);

	// return <Directory categories={categories} />;
};

export default App;
