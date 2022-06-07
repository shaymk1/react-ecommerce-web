import { ReactComponent as CrwnLogo } from 'assets/crown.svg';
import CardDropdown from 'components/card dropdown/CartDropdown';
import CartIcon from 'components/cart-icon/CartIcon';
import { CartContext } from 'contexts/Cart';
import { UserContext } from 'contexts/user.context';
import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from 'utils/firebase/firebase.utils';
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './navigation.styles.jsx';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer  to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>
				<NavLinks >
					<NavLink  to="/shop">
						SHOP
					</NavLink>

					{currentUser ? (
						<NavLink as = 'span'  onClick={signOutUser}>
							{''}
							Sign OUt {''}
						</NavLink>
					) : (
						<NavLink  to="/auth">
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CardDropdown />}

				<Outlet />
			</NavigationContainer>
		</Fragment>
	);
};

export default Navigation;
// <div className="navigation">
//
