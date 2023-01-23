import { Card } from '../Card';
import { Header } from '../Header';
import './style.css';

export const CardContainer = () => {
	return (
		<div className="cardContaier">
			<Header />
			<div className="cards">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
