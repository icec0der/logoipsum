import React from 'react'

export default function PricingCard({ d, setColor, color }) {
	return (
		<div
			className={`rounded-md text-center ${
				d.bg
					? 'bg-[#FF7143] py-12 px-6  w-full  text-white'
					: 'bg-[#F8F8F8]  py-8 px-6 my-4 w-full'
			}`}
		>
			<p className='text-lg'>{d.name}</p>
			<div
				className={` my-7 ${
					d.bg
						? 'flex justify-center items-end text-white'
						: 'flex justify-center items-end text-[#1D293F]'
				}`}
			>
				<span className='text-7xl font-bold'>
					{color
						? d.price === 'Free'
							? 'Free'
							: `$${d.price / 10 + 1.1}`
						: d.price === 'Free'
						? 'Free'
						: `$${d.price}`}
				</span>
				<p className='text-2xl font-bold'>
					{d.price === 'Free' ? '' : `/month`}
				</p>
			</div>
			<div className='flex flex-col my-3 space-y-7'>
				<p>{d.chance1}</p>
				<p>{d.chance2}</p>
				<p>{d.chance3}</p>
			</div>
			<button
				className={`mt-9 ${
					d.bg
						? 'bg-[#9F3919] border border-[#9F3919] w-full py-4 rounded-md text-white font-bold'
						: 'bg-[#fff]  border border-[#EAE9F2] w-full py-4 rounded-md text-[#5454D4] font-bold'
				}`}
			>
				Get Started
			</button>
		</div>
	)
}
