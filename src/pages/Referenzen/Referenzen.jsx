import { Header } from '../../components/Header/Header';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Footer } from '../../components/Footer/Footer';
import { Chat } from '../../components/Chat/Chat';

import './style.scss';

export const Referenzen = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Portfolio />
			<Footer />
			<Chat />
		</div>
	);
};
