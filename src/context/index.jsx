import { createContext, useState } from 'react';

const initialValue = 'dark';
export const ThemeContext = createContext(initialValue);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialValue);

	const handleToggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider value={{ theme, handleToggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
