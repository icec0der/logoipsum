import React, { useState } from 'react'
import PricingCard from './shared/cards/pricing-card'

export default function Pricing() {
	const [color, setColor] = useState(false)

	const data = [
		{
			name: 'Starter',
			price: 'Free',
			chance1: '1 Website',
			chance2: '5 GB Hosting',
			chance3: 'Limited Support',
			bg: false,
		},
		{
			name: 'Premium',
			price: '29',
			chance1: '10 Website',
			chance2: '15 GB Hosting',
			chance3: 'Premium Support',
			bg: true,
		},
		{
			name: 'Enterprise',
			price: '49',
			chance1: 'Unlimited Website',
			chance2: '50 GB Hosting',
			chance3: 'Premium Support',
			bg: false,
		},
	]

	const handleButtonClick = () => {
		setColor(!color)
	}

	return (
		<div className='main-container'>
			<div className='lg:flex justify-between w-full items-center md:mt-48'>
				<div data-aos='fade-up' className='lg:w-1/2'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Get the right plan for future product.
					</h1>
				</div>
				<div
					data-aos='fade-up'
					className='lg:w-1/2 flex mt-5 md:mt-0 yearly_buttons justify-end'
				>
					<div className='bg-[#F7F7FB] p-1 rounded-xl'>
						<button
							onClick={handleButtonClick}
							// eslint-disable-next-line no-restricted-globals
							className={`${
								// eslint-disable-next-line no-restricted-globals
								color
									? ' md:py-4 md:px-10 py-3 px-9  blue_button cursor-pointer transition-colors '
									: ' md:py-4 md:px-10 py-3 px-9 bg-[#5454D4] text-white blue_button cursor-pointer transition-colors '
							}`}
						>
							Yearly
						</button>
						<button
							onClick={handleButtonClick}
							className={`${
								color
									? 'bg-[#5454D4] blue_button_2 text-white  md:py-4 md:px-10 py-3 px-9'
									: ' md:py-4 md:px-10 py-3 px-9'
							}`}
						>
							Monthly
						</button>
					</div>
				</div>
			</div>

			<div
				data-aos='fade-up'
				className='md:flex justify-between gap-4 md:mx-5 md:mt-16'
			>
				{data.map(d => (
					<PricingCard
						key={d.chance1}
						setColor={setColor}
						color={color}
						d={d}
					/>
				))}
			</div>
		</div>
	)
}
