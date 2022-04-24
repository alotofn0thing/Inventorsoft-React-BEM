import { Link } from 'react-router-dom';

import './style.scss';

export const Menu = () => {
	return (
		<div className='menu header__menu'>
			<div className='menu__items-list'>
				<Link className='menu__item' to='/preise'>
					PREISE
				</Link>
				<Link className='menu__item' to='/referenzen'>
					REFERENZEN
				</Link>
				<Link className='menu__item' to='/kontakt'>
					KONTAKT
				</Link>
			</div>
		</div>
	);
};
