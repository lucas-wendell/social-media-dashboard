import './App.css';
import { Container } from '../../components/Container';

import { useContext } from 'react';
import { ThemeContext } from '../../context';

function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="App" data-theme={theme}>
			<div className="topBg" data-theme={theme}></div>
			<Container />
		</div>
	);
}

export default App;
