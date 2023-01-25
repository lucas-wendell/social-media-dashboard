import './style.css';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

export const CardOverview = ({
	name,
	logo,
	text,
	statusNumber,
	percentage,
	isLosing,
}) => {
	return (
		<div className="cardOverview">
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
