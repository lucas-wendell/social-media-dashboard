import './App.css';
import { Container } from '../../components/Container';
import { ThemeProvider } from '../../context';
function App() {
	return (
		<>
			<ThemeProvider>
				<div className="topBg"></div>
				<Container />
			</ThemeProvider>
		</>
	);
}

export default App;
