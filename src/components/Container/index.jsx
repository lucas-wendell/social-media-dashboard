import './style.css';

import { CardContainer } from '../CardContainer';
import { CardOverviewContainer } from '../CardOverviewContainer';

export const Container = () => {
	return (
		<div className="container">
			<CardContainer />
			<CardOverviewContainer />
		</div>
	);
};
