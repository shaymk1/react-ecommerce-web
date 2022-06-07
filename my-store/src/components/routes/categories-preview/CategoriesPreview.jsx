
import './categories-preview.scss'
import { useContext, Fragment } from 'react';
import { categoriesContext } from 'contexts/categories.context';
import CategoryPreview from 'components/category-preview/CategoryPreview';

// import ProductCard from 'components/products-card/ProductCard';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(categoriesContext);

		return (
			<Fragment>
				{Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				})}
			</Fragment>
		);
}

export default CategoriesPreview