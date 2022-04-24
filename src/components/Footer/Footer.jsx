import { Link } from 'react-router-dom';

import { Menu } from '../Header/components/Menu/Menu';
import { Contacts } from './components/Contacts/Contacts';
import { Form } from './components/Form/Form';

import './style.scss';

export const Footer = () => {
	return (
		<div className='footer'>
			<nav className='footer__nav'>
				<Menu />
			</nav>
			<div className='feedback'>
				<Contacts />
				<div className='feedback__form-container'>
					<Form />
				</div>
			</div>
			<div className='footer__copyright'>
				<p className='footer__copyright-text'>
					© 2019 &nbsp; <Link to='/'>Genius</Link> Web Agentur. Alle Rechte
					vorbehalten
				</p>
			</div>
		</div>
	);
};
