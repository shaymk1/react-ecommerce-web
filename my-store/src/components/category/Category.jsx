import ProductCard from 'components/products-card/ProductCard';
import { categoriesContext } from 'contexts/categories.context';
import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './category.scss';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(categoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="category-container">
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</Fragment>
	);
};

export default Category;
