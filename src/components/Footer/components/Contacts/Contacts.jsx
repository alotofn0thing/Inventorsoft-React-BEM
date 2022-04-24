import location from '../../../../assets/icons/location.svg';
import email from '../../../../assets/icons/email.svg';
import phone from '../../../../assets/icons/phone.svg';

import './style.scss';

export const Contacts = () => {
	return (
		<div className='feedback__contacts'>
			<div className='feedback__contacts-items'>
				<div className='feedback__contacts-item'>
					<div className='feedback__contacts-icon'>
						<img src={location} alt='location' />
					</div>
					<p className='feedback__contacts-info'>Poststr, 45, 44890 Hamburg</p>
				</div>
				<div className='feedback__contacts-item'>
					<div className='feedback__contacts-icon'>
						<img src={email} alt='mail' />
					</div>
					<p className='feedback__contacts-info'>hello@tratata.de</p>
				</div>
				<div className='feedback__contacts-item'>
					<div className='feedback__contacts-icon'>
						<img src={phone} alt='phone' />
					</div>
					<p className='feedback__contacts-info'>040 380-33- 44</p>
				</div>
			</div>
		</div>
	);
};
