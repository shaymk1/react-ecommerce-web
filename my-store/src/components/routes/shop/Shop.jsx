
// import SHOP_DATA from '../../../shop-data.json';
import { useContext } from "react";
import { ProductsContext } from "contexts/products";

import ProductCard from "components/products-card/ProductCard";

import './shop.styles.scss'

const Shop = () => {
    const{products} = useContext(ProductsContext)
  return (
		<div className="products-container">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
    };


export default Shop;