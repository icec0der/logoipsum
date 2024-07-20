import { Star } from 'lucide-react'
import React from 'react'
import Down from '../assets/icons/down.png'
import Company1 from '../assets/icons/group-1.svg'
import Company2 from '../assets/icons/group-2.svg'
import Company3 from '../assets/icons/group-3.svg'
import Company4 from '../assets/icons/group-4.svg'
import Company5 from '../assets/icons/group-5.svg'
import HomeImage from '../assets/images/home-img.png'

export default function Home() {
	const companyes = [
		{ id: 1, image: Company1 },
		{ id: 2, image: Company2 },
		{ id: 3, image: Company3 },
		{ id: 4, image: Company4 },
		{ id: 5, image: Company5 },
	]

	return (
		<div className='main-container'>
			<div className='circle'>
				<div className='shadow_circle'></div>
			</div>
			<div className='circle_star'>
				<Star className='size-20 animation' />
			</div>

			<div className='mt-32 lg:mt-0 justify-center home_contents text-center md:min-h-screen items-center'>
				<div data-aos='fade-up' className='lg:w-1/2 text-center '>
					<h1 className='text-4xl text-center lg:text-start md:text-7xl font-bold '>
						Grow your subscription business
					</h1>
					<p className='mt-3 mb-8 md:mt-8 md:mb-12 text-center lg:text-start'>
						Outcome-centered products that reduce churn,{' '}
						<br className='hidden md:block' /> optimize pricing, and grow your
						subscription <br className='hidden md:block' /> business end-to-end.
					</p>
					<div className='flex items-center gap-5 md:gap-10 button_and_icon'>
						<button className='bg-[#5454D4] py-3 px-8 md:py-4 md:px-16 text-white rounded-md cursor-pointer transition-colors hover:bg-[#3b3bec]'>
							Get Started
						</button>
						<div className='cursor-pointer'>
							<img src={Down} alt='' />
						</div>
					</div>
				</div>

				<div data-aos='fade-up' className=' mt-10 md:mt-0'>
					<img src={HomeImage} alt='' />
				</div>
			</div>

			<div
				data-aos='fade-up'
				className='company_images md:flex justify-between'
			>
				{companyes.map(company => (
					<img
						key={company.id}
						className='opacity-60 hover:opacity-100 transition duration-200 cursor-pointer'
						src={company.image}
						alt=''
					/>
				))}
			</div>
		</div>
	)
}
