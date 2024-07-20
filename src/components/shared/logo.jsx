import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/icons/logo.svg'

export default function Logo() {
	return (
		<div>
			<Link to={'#'}>
				<img src={LogoImage} alt='' />
			</Link>
		</div>
	)
}
