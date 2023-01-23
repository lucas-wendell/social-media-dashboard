import { CardContainer } from '../CardContainer';
import { CardOverviewContainer } from '../CardOverviewContainer';
import './style.css';

export const Container = () => {
	return (
		<div className="container">
			<CardContainer />
			<CardOverviewContainer />
		</div>
	);
};
