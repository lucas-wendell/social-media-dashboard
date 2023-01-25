import './style.css';
import arrowUp from '../../images/icon-up.svg';
/* 

{
	name: 'facebook',
	logo: facebookLogo,
	text: 'Page Views',
	statusNumber: 87,
	percentage: '3%',
	isLosing: false,
},
*/

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
					<img src={arrowUp} alt="arrow-icon" />
					<p>{percentage}</p>
				</div>
			</div>
		</div>
	);
};
