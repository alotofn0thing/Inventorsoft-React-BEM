import { Link } from 'react-router-dom';

import { Menu } from './components/Menu/Menu';
import { Language } from './components/Language/Language';

import headerImg from '../../assets/images/header.png';

import './style.scss';

export const Header = () => {
	return (
		<>
			<div className='header'>
				<nav className='header__nav'>
					<div className='logo'>
						<Link className='logo-link' to='/'>
							<div className='logo__title'>GENIUS</div>
						</Link>
					</div>
					<div className='menu-container'>
						<Menu />
						<Language />
					</div>
				</nav>
				<div className='header__img'>
					<div className='header__mask'>
						<img src={headerImg} alt='header' />
					</div>
				</div>
			</div>
		</>
	);
};
