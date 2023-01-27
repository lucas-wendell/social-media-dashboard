import './style.css';
import { useContext } from 'react';

import { ThemeContext } from '../../context';
import { ToggleButton } from '../ToggeButton';

export const Header = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<header className="header">
			<div className="textDiv" data-theme={theme}>
				<h1>Social Media Dashboard</h1>
				<p>
					Total Followers: <span>23.004</span>
				</p>
			</div>
			<ToggleButton />
		</header>
	);
};
