import './style.css';
export const ToggleButton = () => {
	return (
		<div className="buttonDiv">
			<p>Dark Mode</p>
			<div className="button" data-theme="dark"></div>
		</div>
	);
};
