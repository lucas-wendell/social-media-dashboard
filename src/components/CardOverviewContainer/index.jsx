import './style.css';

import { data } from './data';
import { CardOverview } from '../CardOverview';

import { useContext, useState } from 'react';
import { ThemeContext } from '../../context';

export const CardOverviewContainer = () => {
	const [state] = useState([...data]);
	const { theme } = useContext(ThemeContext);

	return (
		<div className="cardOverviewContainer">
			<h2 data-theme={theme}>Overview - Today</h2>
			<div className="cardsOverview">
				{state.map((card, index) => {
					return (
						<CardOverview
							name={card.name}
							logo={card.logo}
							percentage={card.percentage}
							isLosing={card.isLosing}
							text={card.text}
							statusNumber={card.statusNumber}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
