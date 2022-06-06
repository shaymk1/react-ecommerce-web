import Button from 'components/button/Button';
import CartItem from 'components/cart-item/CartItem';
import { CartContext } from 'contexts/Cart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './card-dropdown.scss';

const CartDropdown = () => {
	 const { cartItems } = useContext(CartContext);
		const navigate = useNavigate();

		const goToCheckoutHandler = () => {
			navigate('/checkout');
		};

		return (
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>
				<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
			</div>
		);
};

export default CartDropdown;
