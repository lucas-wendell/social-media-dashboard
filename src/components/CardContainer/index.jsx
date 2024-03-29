import './style.css';

import { Card } from '../Card';
import { Header } from '../Header';

import { data } from './data';
import { useState } from 'react';

export const CardContainer = () => {
	const [state] = useState([...data]);

	return (
		<div className="cardContaier">
			<Header />
			<div className="cards">
				{state.map(socialMedia => {
					return (
						<Card
							key={socialMedia.name}
							logo={socialMedia.logo}
							followersNumber={socialMedia.followersNumber}
							followersToday={socialMedia.followersToday}
							losingFollowers={socialMedia.losingFollowers}
							username={socialMedia.username}
							borderColor={socialMedia.borderColor}
						/>
					);
				})}
			</div>
		</div>
	);
};
