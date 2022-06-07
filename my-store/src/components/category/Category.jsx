
import './category.scss'

import { useParams } from 'react-router-dom'
import { useContext,useState, useEffect } from 'react'
 import { categoriesContext } from 'contexts/categories.context'
import ProductCard from 'components/products-card/ProductCard'

const Category = () => {
    const {category} = useParams()
    const { categoriesMap } = useContext(categoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category])

    },[category, categoriesMap])
  return (
    <div className='category-container'>
    {products &&
        products.map((product)=>
        <ProductCard key={product.id} product = {product}/>
        )
    }
    </div>
  )
}

export default Category