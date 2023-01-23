import { ToggleButton } from '../ToggeButton';

import './style.css';

export const Header = () => {
	return (
		<header className="header">
			<div className="textDiv">
				<h1>Social Media Dashboard</h1>
				<p>
					Total Followers: <span>23.0004</span>
				</p>
			</div>
			<ToggleButton />
		</header>
	);
};
