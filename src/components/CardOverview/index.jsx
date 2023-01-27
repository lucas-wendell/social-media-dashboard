import './style.css';

import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const CardOverview = ({
	name,
	logo,
	text,
	statusNumber,
	percentage,
	isLosing,
}) => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="cardOverview" data-theme={theme}>
			<div className="socialMediaDiv">
				<p>{text}</p>
				<img src={logo} alt={`icon-${name}`} />
			</div>
			<div className="statusDiv">
				<h3>{statusNumber}</h3>
				<div className="percentageDiv">
					<img src={isLosing ? arrowDown : arrowUp} alt="arrow-icon" />
					<p
						style={{
							color: isLosing ? 'hsl(356, 69%, 56%)' : 'hsl(163, 72%, 41%)',
						}}
					>
						{percentage}
					</p>
				</div>
			</div>
		</div>
	);
};
