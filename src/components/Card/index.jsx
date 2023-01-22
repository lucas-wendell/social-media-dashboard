import './style.css';
import facebookLogo from '../../images/icon-facebook.svg';
import arrowUp from '../../images/icon-up.svg';

export const Card = () => {
	return (
		<div className="card">
			<p className="userName">
				<img src={facebookLogo} alt="icon-facebook" /> <span>@nathanf</span>
			</p>
			<div className="followersDiv">
				<h1>1987</h1>
				<p>followers</p>
			</div>
			<div className="todayStatus">
				<img src={arrowUp} alt="arrow-up" />
				<p>
					<span>12</span>Today
				</p>
			</div>
		</div>
	);
};
