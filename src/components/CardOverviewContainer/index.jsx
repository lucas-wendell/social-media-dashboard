import { CardOverview } from '../CardOverview';
import './style.css';

export const CardOverviewContainer = () => {
	return (
		<div className="cardOverviewContainer">
			<h2>Overview - Today</h2>
			<div className="cards">
				<CardOverview />
				<CardOverview />
				<CardOverview />
				<CardOverview />
				<CardOverview />
			</div>
		</div>
	);
};
