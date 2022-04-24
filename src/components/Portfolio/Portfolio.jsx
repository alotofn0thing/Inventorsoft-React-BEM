import { Card } from './components/Card/Card';

import cardImage1 from '../../assets/images/card-image-1.png';
import cardImage2 from '../../assets/images/card-image-2.png';
import cardImage3 from '../../assets/images/card-image-3.png';
import cardImage4 from '../../assets/images/card-image-4.png';

import './style.scss';

export const Portfolio = () => {
	return (
		<div className='portfolio'>
			<div className='heading'>
				<h1 className='heading__title'>Referenzen</h1>
				<p className='heading__description'>
					Von unseren Designern gestaltet, von unseren Entwicklern programmiert,
					von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum
					Festpreis.
				</p>
			</div>
			<div className='cards-container'>
				<Card image={cardImage1} mirrored={false} />
				<Card image={cardImage2} mirrored={true} />
				<Card image={cardImage3} mirrored={false} />
				<Card image={cardImage4} mirrored={true} />
			</div>
		</div>
	);
};
