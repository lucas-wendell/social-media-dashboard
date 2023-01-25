import { CardOverview } from '../CardOverview';
import './style.css';
import { useState } from 'react';

import facebookLogo from '../../images/icon-facebook.svg';
import twitterLogo from '../../images/icon-twitter.svg';

import instagramLogo from '../../images/icon-instagram.svg';
import youtubeLogo from '../../images/icon-youtube.svg';

export const CardOverviewContainer = () => {
	const [state, setState] = useState([
		{
			name: 'facebook',
			logo: facebookLogo,
			text: 'Page Views',
			statusNumber: 87,
			percentage: '3%',
			isLosing: false,
		},
		{
			name: 'facebook',
			logo: facebookLogo,
			text: 'Likes',
			statusNumber: 52,
			percentage: '2%',
			isLosing: true,
		},
		{
			name: 'instagram',
			logo: instagramLogo,
			text: 'Likes',
			statusNumber: 5462,
			percentage: '2257%',
			isLosing: false,
		},
		{
			name: 'instagram',
			logo: instagramLogo,
			text: 'Profile Views',
			statusNumber: '52k',
			percentage: '1375%',
			isLosing: false,
		},
		{
			name: 'twitter',
			logo: twitterLogo,
			text: 'Retweets',
			statusNumber: 117,
			percentage: '303%',
			isLosing: false,
		},
		{
			name: 'twitter',
			logo: twitterLogo,
			text: 'Likes',
			statusNumber: 507,
			percentage: '553%',
			isLosing: false,
		},
		{
			name: 'youtube',
			logo: youtubeLogo,
			text: 'Likes',
			statusNumber: 107,
			percentage: '19%',
			isLosing: true,
		},
		{
			name: 'youtube',
			logo: youtubeLogo,
			text: 'Total Views',
			statusNumber: 1407,
			percentage: '12%',
			isLosing: true,
		},
	]);
	return (
		<div className="cardOverviewContainer">
			<h2>Overview - Today</h2>
			<div className="cards">
				{state.map((card, index) => {
					return (
						<CardOverview
							name={card.name}
							logo={card.logo}
							percentage={card.percentage}
							isLosing={card.isLosing}
							text={card.text}
							statusNumber={card.statusNumber}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
