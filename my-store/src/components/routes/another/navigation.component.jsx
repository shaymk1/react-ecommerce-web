import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {ReactComponent as CrwnLogo} from '../assets/crown.svg' //had to move assets into routes for the relative path to work
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation ">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
				</div>
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;
// <h1>Yebo Nav</h1>
