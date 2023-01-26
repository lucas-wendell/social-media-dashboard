import { CardOverview } from '../CardOverview';
import './style.css';
import { useState } from 'react';
import { data } from './data';

export const CardOverviewContainer = () => {
	const [state] = useState([...data]);

	return (
		<div className="cardOverviewContainer">
			<h2>Overview - Today</h2>
			<div className="cards">
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
