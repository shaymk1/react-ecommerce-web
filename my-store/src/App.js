import React from 'react';
import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.components.jsx';

const App = () => {
	const categories = [
		//object-1
		{
			id: 1,
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
			id: 4,
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
			id: 5,
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		},
	];
	return (
		<React.Fragment>
			<div className="categories-container">
				{categories.map(({ category }) => {
					return <CategoryItem key={category.id} category={category} />;
				})}
			</div>
		</React.Fragment>
	);
};

export default App;

/*container-6
				<div className="category-container">
					<img src="" alt="" />
					<div className="category-body-container">
						<h2>T-shirts</h2>
						<p>Shop Now</p>
					</div>
				</div>

        	/*container-2*/
// <div className="category-container">
// 	<img src="" alt="" />
// 	<div className="category-body-container">
// 		<h2>Jackets</h2>
// 		<p>Shop Now</p>
// 	</div>
// </div>
/*container-3*/
// <div className="category-container">
// 	<img src="" alt="" />
// 	<div className="category-body-container">
// 		<h2>Sneakers</h2>
// 		<p>Shop Now</p>
// 	</div>
// </div>
/*container-4*/
// <div className="category-container">
// 	<img src="" alt="" />
// 	<div className="category-body-container">
// 		<h2>Women</h2>
// 		<p>Shop Now</p>
// 	</div>
// </div>
/*container-5*/
// <div className="category-container">
// 	<img src="" alt="" />
// 	<div className="category-body-container">
// 		<h2>Men</h2>
// 		<p>Shop Now</p>
// 	</div>
// </div>
