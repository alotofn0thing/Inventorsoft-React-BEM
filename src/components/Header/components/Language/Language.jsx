import './style.scss';

export const Language = () => {
	return (
		<div className='header__lang'>
			<select className='header__lang-select' name='language'>
				<option lang='en' value='english'>
					EN
				</option>
				<option lang='ge' value='german'>
					GE
				</option>
				<option lang='fr' value='french'>
					FR
				</option>
				<option lang='ua' value='ukrainian'>
					UA
				</option>
			</select>
		</div>
	);
};
