import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo Color.png'
import { navLinks } from '../constants'

export default function Footer() {
	return (
		<div data-aos='fade-up' className='bg-[#ff4d12] text-white py-10 mt-20'>
			<div className='px-4 md:px-20'>
				<div className='md:flex justify-between max-w-screen-md:flex-col'>
					<div>
						<div className='w-full flex md:block justify-center'>
							<Link to={'/'}>
								<img src={Logo} alt='' />
							</Link>
						</div>
						<div className='flex justify-center md:justify-start gap-4 items-center mt-5'>
							<Link to={'/'}>
								<Instagram className='size-10 p-2 rounded-md cursor-pointer hover:bg-[#ff4d12] hover:text-white transition-all duration-300 bg-white text-[#ff4d12] ' />
							</Link>
							<Link to={'/'}>
								<Twitter className='size-10 p-2 rounded-md cursor-pointer hover:bg-[#ff4d12] hover:text-white transition-all duration-300 bg-white text-[#ff4d12]  ' />
							</Link>
							<Link to={'/'}>
								<Facebook className='size-10 p-2 rounded-md cursor-pointer hover:bg-[#ff4d12] hover:text-white transition-all duration-300 bg-white text-[#ff4d12]  ' />
							</Link>
							<Link to={'/'}>
								<Github className='size-10 p-2 rounded-md cursor-pointer hover:bg-[#ff4d12] hover:text-white transition-all duration-300 bg-white text-[#ff4d12]  ' />
							</Link>
						</div>
					</div>
					<div>
						<div className='flex flex-wrap justify-center mt-10 md:grid grid-cols-1 gap-8 text-[17px] font-[500]'>
							{navLinks.map(nav => (
								<Link key={nav.route} to={nav.route}>
									{nav.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
