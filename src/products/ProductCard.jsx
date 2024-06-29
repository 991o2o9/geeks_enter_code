import React from 'react'

const ProductCard = ({ elem }) => {
	return (
		<div className='cards-itself'>
			<div className='section1'>
				<img
					src='https://w7.pngwing.com/pngs/971/475/png-transparent-pokemon-charmander-illustration-pokemon-x-and-y-pokemon-go-charmander-bulbasaur-pokemon-mammal-orange-vertebrate-thumbnail.png'
					className='pokemon-img'
					alt={elem.name}
				/>
				<h3 className='text-name'>{elem.name}</h3>
			</div>
		</div>
	)
}

export default ProductCard
