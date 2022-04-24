import { useForm } from 'react-hook-form';

import './style.scss';

export const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	const handleChange = () => {};
	const onSubmit = data => {
		alert(JSON.stringify(data));
		reset();
	};
	return (
		<div className='feedback__form'>
			<h3 className='feedback__form-title'>SCHREIBEN SIE UNS!</h3>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<input
					className='form__input'
					placeholder='Firma / Organisation'
					onChange={handleChange}
					{...register('Organisation', {
						required: 'Gib deinen Namen ein',
						minLength: {
							value: 3,
							message: 'Mindestens 3 Zeichen',
						},
					})}
				/>
				{errors?.Organisation && (
					<p className='error'>{errors?.Organisation?.message || 'Error!'}</p>
				)}

				<div className='form__inputs-container'>
					<div>
						<input
							className='form__input '
							placeholder='E-mail'
							onChange={handleChange}
							{...register('email', {
								required: 'Geben sie ihre E-Mail Adresse ein',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Geben Sie eine gültige E-Mail-Adresse ein',
								},
							})}
						/>
						{errors?.email && (
							<p className='error'>{errors?.email?.message || 'Error!'}</p>
						)}
					</div>
					<div>
						<input
							className='form__input '
							placeholder='Telefon'
							onChange={handleChange}
							{...register('phone', {
								required: 'Gib deine Telefonnummer ein',
								pattern: {
									value:
										/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
									message: ' Sie eine gültige Telefonnummer ein',
								},
								minLength: {
									value: 6,
									message: ' Sie eine gültige Telefonnummer ein',
								},
								maxLength: 15,
							})}
						/>
						{errors?.phone && (
							<p className='error'>{errors?.phone?.message || 'Error!'}</p>
						)}
					</div>
				</div>
				<textarea
					className='form__input textarea'
					placeholder='Was Ist Ihr Anliegen?'
					rows='10'
					onChange={handleChange}
					{...register('text', {
						required: 'Gib deine Nachricht ein',
						minLength: {
							value: 6,
							message: 'Mindestens 6 Zeichen',
						},
					})}
				></textarea>
				{errors?.text && (
					<p className='error'>{errors?.text?.message || 'Error!'}</p>
				)}
				<button className='form__btn' type='submit'>
					SENDEN
				</button>
			</form>
		</div>
	);
};
