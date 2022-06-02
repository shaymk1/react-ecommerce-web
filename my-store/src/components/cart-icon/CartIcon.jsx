import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon = () => {
  return (
		<div className="card-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
}

export default CartIcon;