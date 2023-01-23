import './style.css';
import arrowUp from '../../images/icon-up.svg';
import facebookLogo from '../../images/icon-facebook.svg';

export const CardOverview = () => {
	return (
		<div className="cardOverview">
			<div className="socialMediaDiv">
				<p>Page Views</p>
				<img src={facebookLogo} alt="icon-facebook" />
			</div>
			<div className="statusDiv">
				<h3>87</h3>
				<div className="percentageDiv">
					<img src={arrowUp} alt="arrow-up" />
					<p>3%</p>
				</div>
			</div>
		</div>
	);
};
