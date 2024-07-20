import React from 'react'

export default function CardFeatures({ d }) {
	return (
		<div className='text-center'>
			<div className='w-full flex justify-center'>
				<img src={d.image} alt='' />
			</div>
			<h1 className='mt-3 mb-4 text-2xl font-bold'>{d.title}</h1>
			<p className='md:w-[320px]'>{d.description}</p>
		</div>
	)
}
