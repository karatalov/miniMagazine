import React from 'react'
import { MdOutlineNightlight, MdOutlineNightlightRound } from 'react-icons/md'
import { useTheme } from '../../ThemeContext/ThemeContext'
import './Header.scss'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

const Header = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<Link to={'/'}>Nurs</Link>
					<div className='header--nav'>
						<button onClick={toggleTheme}>
							{theme === 'light' ? (
								<MdOutlineNightlightRound title='Переключить на темную тему' />
							) : (
								<MdOutlineNightlight title='Переключить на светлую тему' />
							)}
						</button>
						<Link to={'/basket'}>
							<PiShoppingCartSimpleLight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
