import './style.scss';

export const Card = ({ image, mirrored }) => {
	const isMirrored = `card ${mirrored ? 'mirrored-card' : ''}`;
	return (
		<div className={isMirrored}>
			<div className='card__img'>
				<img src={image} alt='card' />
				<h3 className='card__img-descr'>Webdesign Agentur</h3>
			</div>
			<div className='card__descr'>
				<h3 className='card__descr-title'>Webdesign Agentur</h3>
				<p className='card__descr-text'>
					Wir sind ein wirksames Team von Programmierern und Designer und bieten
					professionelle Dienstlei stungen rund um’s Thema Webdesign und
					Online-Marketing an. Seit 2006 kultivieren wir.
				</p>
			</div>
		</div>
	);
};
