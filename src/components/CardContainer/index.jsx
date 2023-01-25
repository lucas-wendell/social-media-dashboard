import './style.css';
import { useState } from 'react';

import facebookLogo from '../../images/icon-facebook.svg';
import twitterLogo from '../../images/icon-twitter.svg';

import instagramLogo from '../../images/icon-instagram.svg';
import youtubeLogo from '../../images/icon-youtube.svg';

import { Card } from '../Card';
import { Header } from '../Header';

export const CardContainer = () => {
	const [state] = useState([
		{
			name: 'facebook',
			username: '@nathanf',
			logo: facebookLogo,
			followersNumber: 1987,
			followersToday: 12,
			losingFollowers: false,
		},
		{
			name: 'twitter',
			username: '@nathanf',
			logo: twitterLogo,
			followersNumber: 1044,
			followersToday: 99,
			losingFollowers: false,
		},
		{
			name: 'instagram',
			username: '@realnathanf',
			logo: instagramLogo,
			followersNumber: '11k',
			followersToday: 1099,
			losingFollowers: false,
		},
		{
			name: 'youtube',
			username: 'Nathan F.',
			logo: youtubeLogo,
			followersNumber: 8239,
			followersToday: 144,
			losingFollowers: true,
		},
	]);

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
