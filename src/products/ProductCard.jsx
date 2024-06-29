import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductCard = ({ elem }) => {
	const [sprites, setSprites] = useState(null)

	const fetchDetails = async () => {
		const { data } = await axios.get(elem.url)
		setSprites(data.sprites.front_default)
	}

	useEffect(() => {
		fetchDetails()
	}, [elem.url])
	console.log(sprites)
	return (
		<div className='cards-itself'>
			<div className='section1'>
				<img src={sprites} className='pokemon-img' alt={elem.name} />
				<h3 className='text-name'>{elem.name}</h3>
			</div>
		</div>
	)
}

export default ProductCard
