import { List, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants/index'
import Logo from './shared/logo'

export default function Navbar() {
	const [scroll, setScroll] = useState(false)
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScroll(false)
		} else {
			setScroll(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	console.log(scroll)

	return (
		<div
			data-aos='fade-down'
			data-aos-duration='1000'
			data-aos-delay='500'
			className={`fixed top-0 w-full z-40  transition-all duration-200 ${
				scroll
					? 'py-4 transition-all border-b duration-200'
					: 'backdrop-blur-xl py-2 shadow-md border-b-0 transition-all duration-200'
			}`}
		>
			<div className='md:px-6 lg:px-16 navbar'>
				<div className='flex justify-between items-center'>
					<div>
						<Logo />
					</div>

					<div className={`hidden md:flex  gap-8 text-[17px] font-[500]`}>
						{navLinks.map(nav => (
							<Link key={nav.route} to={nav.route}>
								{nav.name}
							</Link>
						))}
					</div>

					<div className='hidden md:flex'>
						<button className='bg-[#FF7143] text-sm font-bold text-white py-4 px-10 rounded-md transition-colors hover:bg-[#ff4d12]'>
							Get Started
						</button>
					</div>

					<div className='block md:hidden cursor-pointer bg-blue-400/20 p-1.5 rounded-md hover:bg-blue-400/10 transition-colors'>
						<List onClick={handleOpen} className='size-7' />
					</div>
				</div>
			</div>
			<div
				className={`transition-all  duration-300 z-50 ${
					open
						? 'md:hidden absolute left-0 top-0 w-full z-50 flex flex-col p-2.5 bg-[#F8F8F8] backdrop-blur-xl h-[100vh] gap-3 text-[17px] font-[500]'
						: 'md:hidden absolute -left-full top-0 transition-all z-50 duration-300 flex flex-col p-2.5 bg-[#F8F8F8] backdrop-blur-xl h-[100vh] gap-3 text-[17px] font-[500]'
				}`}
			>
				<div className='flex justify-between items-center'>
					<Logo />
					<div className=' block md:hidden cursor-pointer bg-blue-400/20 p-1.5 rounded-md hover:bg-blue-400/10 transition-colors'>
						<X className='size-7' onClick={handleOpen} />
					</div>
				</div>
				{navLinks.map(nav => (
					<Link
						className='flex bg-blue-400/20 p-3 rounded-md items-center gap-3'
						key={nav.route}
						to={nav.route}
					>
						<nav.icon />
						{nav.name}
					</Link>
				))}
				<div className='flex flex-col md:hidden'>
					<button className='bg-[#FF7143] text-sm font-bold text-white py-4 px-10 rounded-md transition-colors hover:bg-[#ff4d12]'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}
