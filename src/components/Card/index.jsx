import './style.css';

import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

import { useCallback, useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../context';

export const Card = ({
	logo,
	followersNumber,
	losingFollowers,
	followersToday,
	username,
}) => {
	const imgRef = useRef(null);
	const { theme } = useContext(ThemeContext);

	const handleImg = useCallback(() => {
		imgRef.current.setAttribute('src', losingFollowers ? arrowDown : arrowUp);
	}, [losingFollowers]);

	useEffect(() => {
		handleImg();
	}, [handleImg]);

	return (
		<div className="card" data-theme={theme}>
			<p className="userName">
				<img src={logo} alt="social-media-icon" /> <span>{username}</span>
			</p>
			<div className="followersDiv">
				<h1>{followersNumber}</h1>
				<p>followers</p>
			</div>
			<div className="todayStatus">
				<img ref={imgRef} alt="arrow-icon" />
				<p
					style={{
						color: losingFollowers
							? 'hsl(356, 69%, 56%)'
							: 'hsl(163, 72%, 41%)',
					}}
				>
					<span>{followersToday}</span>Today
				</p>
			</div>
		</div>
	);
};
