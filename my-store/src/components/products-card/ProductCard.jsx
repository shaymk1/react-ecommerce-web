import Button from 'components/button/Button';
import { CartContext } from 'contexts/Cart';
import { useContext } from 'react';
import './product-card.scss';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to card
			</Button>
		</div>
	);
};

export default ProductCard;
