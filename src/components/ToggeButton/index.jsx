import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './style.css';

export const ToggleButton = () => {
	const { theme, handleToggleTheme } = useContext(ThemeContext);

	return (
		<div className="buttonDiv" onClick={handleToggleTheme}>
			<p>Dark Mode</p>
			<div className="button" data-theme={theme}></div>
		</div>
	);
};
