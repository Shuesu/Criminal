import { TVlayer, HatSection, NavigationSection, ChartSection } from './components';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.container}>
			<TVlayer></TVlayer>
			<header>
				<HatSection></HatSection>
				<NavigationSection></NavigationSection>
				{/* <RunTextSection></RunTextSection> */}
			</header>
			<main className={styles.main}>
				{/* <MapSection></MapSection> */}
				{/* <ChartSection></ChartSection> */}
				{/* <StatsGraphSection></StatsGraphSection> */}
				{/* <RunTextSection></RunTextSection> */}
			</main>

		</div >
	);
};
