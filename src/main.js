import React from 'react'
import Features from './components/features'
import Footer from './components/footer'
import Home from './components/home'
import Navbar from './components/navbar'
import Pricing from './components/pricing'

export default function Main() {
	return (
		<div>
			<Navbar />
			<main>
				<Home />
				<Features />
				<Pricing />
			</main>
			<Footer />
		</div>
	)
}
