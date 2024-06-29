import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
const ProductList = () => {
	const API = 'https://pokeapi.co/api/v2/pokemon/'
	const [products, setProducts] = useState([])

	const getProducts = async () => {
		const { data } = await axios.get(API)
		setProducts(data.results)
	}

	useEffect(() => {
		getProducts()
	}, [])
	console.log(products)
	return (
		<div className='main'>
			{products.map(elem => (
				<ProductCard key={elem.id} elem={elem} />
			))}
		</div>
	)
}

export default ProductList
