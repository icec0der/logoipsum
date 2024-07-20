import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from './components/features'
import Home from './components/home'
import Pricing from './components/pricing'
import Main from './main'

export default function App() {
	useEffect(() => {
		Aos.init(
			{
				duration: 1000,
				easing: 'ease-in-out',
				once: true,
				mirror: false,
				anchorPlacement: 'top-bottom',
				// offset: 120,
				// disable: window.innerWidth < 992,
			},
			[]
		)
	})

	return (
		<>
			<Routes>
				<Route path='#' element={<Main />} />
				<Route path='#home' element={<Home />} />
				<Route path='#features' element={<Features />} />
				<Route path='#pricing' element={<Pricing />} />
			</Routes>

			<div className=''>
				<Main />
			</div>
		</>
	)
}
