import React from 'react'
import { Link } from 'react-router-dom'
import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'
import Card3 from '../assets/images/card3.png'
import Content from '../assets/images/content.png'
import Subscription from '../assets/images/subscription.png'
import CardFeatures from './shared/cards/card-features'

export default function Features() {
	const data = [
		{
			image: Card1,
			title: 'Benchmarks',
			description:
				'See how you stack up against comparable companies in similar stages.',
		},
		{
			image: Card2,
			title: 'Pricing Audit',
			description:
				'Benchmark the health of your monetization and pricing strategy.',
		},
		{
			image: Card3,
			title: 'Retention Audit',
			description:
				'Audit where revenue leakage exists and where you can increase retention.',
		},
	]

	return (
		<section id='features'>
			<div className='main-container'>
				<div className='my-10 content relative md:my-52 md:flex justify-between items-center'>
				<div className='orange_circle_2'></div>
					<div data-aos='fade-up'>
						<img src={Subscription} alt='' />
					</div>

					<div data-aos='fade-up'>
						<h1 className='text-3xl md:text-5xl font-bold'>
							Subscription index
						</h1>
						<p className='my-3 md:my-8'>
							A daily dataset to keep you up to date on{' '}
							<br className='hidden md:block' /> subscription market trends and
							what's happening in <br className='hidden md:block' /> your
							vertical.
						</p>

						<Link to={'#'}>
							<p className='text-[#5454D4] font-bold text-lg'>Learn more</p>
						</Link>
					</div>
				</div>

				<div className='my-10 relative content_ w-full flex md:my-52  md:flex justify-between items-center'>
					<div className='orange_circle'></div>
					<div data-aos='fade-up' className='md:w-1/2'>
						<h1 className='text-3xl md:text-5xl font-bold'>In-depth metrics</h1>
						<p className='my-3 md:my-8'>
							Accurate, real-time reporting at your fingertips.{' '}
							<br className='hidden md:block' /> Getting data has never been
							easier.
						</p>

						<Link to={'#'}>
							<p className='text-[#5454D4] font-bold text-lg'>Learn more</p>
						</Link>
					</div>
					<div data-aos='fade-up' className='md:w-1/2 flex justify-center'>
						<img src={Content} alt='' />
					</div>
				</div>

				<div
					data-aos='fade-up'
					className='flex cards justify-between items-center my-20'
				>
					{data.map(d => (
						<CardFeatures key={d.title} d={d} />
					))}
				</div>
			</div>
		</section>
	)
}
