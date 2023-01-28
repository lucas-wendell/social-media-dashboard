import twitterLogo from '../../images/icon-twitter.svg';
import facebookLogo from '../../images/icon-facebook.svg';

import youtubeLogo from '../../images/icon-youtube.svg';
import instagramLogo from '../../images/icon-instagram.svg';

export const data = [
	{
		name: 'facebook',
		username: '@nathanf',
		logo: facebookLogo,
		followersNumber: 1987,
		followersToday: 12,
		losingFollowers: false,
		borderColor: 'hsl(208, 92%, 53%)',
	},
	{
		name: 'twitter',
		username: '@nathanf',
		logo: twitterLogo,
		followersNumber: 1044,
		followersToday: 99,
		losingFollowers: false,
		borderColor: 'hsl(203, 89%, 53%)',
	},
	{
		name: 'instagram',
		username: '@realnathanf',
		logo: instagramLogo,
		followersNumber: '11k',
		followersToday: 1099,
		losingFollowers: false,
		borderColor:
			'linear-gradient(80deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
	},
	{
		name: 'youtube',
		username: 'Nathan F.',
		logo: youtubeLogo,
		followersNumber: 8239,
		followersToday: 144,
		losingFollowers: true,
		borderColor: 'hsl(348, 97%, 39%)',
	},
];
