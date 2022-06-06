import { ReactComponent as CrwnLogo } from 'assets/crown.svg';
import { UserContext } from 'contexts/user.context';
import { CartContext } from 'contexts/Cart';
import CartIcon from 'components/cart-icon/CartIcon';
import CardDropdown from 'components/card dropdown/CartDropdown';
import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from 'utils/firebase/firebase.utils';
import './navigation.styles.scss';


const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);

	
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>

					{currentUser ? (
						<span className="nav-link" onClick = {signOutUser}>
						{''}
							Sign OUt {''}
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon/>
				</div>
			{isCartOpen &&	<CardDropdown/>}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
