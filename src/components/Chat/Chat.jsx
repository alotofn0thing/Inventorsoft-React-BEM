import chat from '../../assets/icons/chat.svg';

import './style.scss';

export const Chat = () => {
	return (
		<span className='chat-icon'>
			<img src={chat} alt='Chat icon' />
		</span>
	);
};
