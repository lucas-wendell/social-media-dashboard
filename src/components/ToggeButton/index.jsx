import './style.css';

import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const ToggleButton = () => {
	const { theme, handleToggleTheme } = useContext(ThemeContext);

	return (
		<div className="buttonDiv" onClick={handleToggleTheme}>
			<p data-theme={theme}>Dark Mode</p>
			<div className="button" data-theme={theme}></div>
		</div>
	);
};
