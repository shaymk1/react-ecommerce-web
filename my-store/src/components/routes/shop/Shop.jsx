// import SHOP_DATA from '../../../shop-data.json';
// import CategoryPreview from 'components/category-preview/CategoryPreview';
import { Routes, Route } from 'react-router-dom';
import { categoriesContext } from 'contexts/categories.context';
import {  useContext } from 'react';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from 'components/category/Category';



const Shop = () => {
	// const { categoriesMap } = useContext(categoriesContext);
	return (
		
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
 
	);
};

export default Shop;

// <div className='shop-container'>
// 			{Object.keys(categoriesMap).map((title) => {
// 				const  products = categoriesMap[title]
// 				return <CategoryPreview key = {title} title = {title} products = {products}/>
// 			})}
// 		</div>

// // <Fragment key={title}>
// // 					<h2>{title}</h2>
// // 					<div className="products-container">
// // 						{categoriesMap[title].map((product) => (
// // 							<CategoryPreview key={product.id} product={product} />
// 						))}
// 					</div>
// 				</Fragment>

// //
