import './style.css';
import { useState } from 'react';

import { Card } from '../Card';
import { Header } from '../Header';

import { data } from './data';

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
						/>
					);
				})}
			</div>
		</div>
	);
};
