import { Routes, Route } from 'react-router-dom';
import { TVlayer, HatSection, NavigationSection, ChartSection, RunTextSection, MapSection, StatsGraphSection, TextScrollSection, SvgBox } from './components';
import styles from './app.module.css';

export const App = () => {
	return (

		<div className={styles.container}>
			<TVlayer></TVlayer>
			<header>
				<HatSection></HatSection>
				<NavigationSection></NavigationSection>
				<RunTextSection></RunTextSection>
			</header>
			<main className={styles.main}>
				<MapSection />
				<ChartSection />
				<StatsGraphSection></StatsGraphSection>
				<TextScrollSection></TextScrollSection>
				<SvgBox></SvgBox>
			</main>

			<Routes>
				<Route path="/" element={2} />
				<Route path="/robbery" element={2} />
				<Route path="/theft" element={3} />
				<Route path="/rape" element={4} />
				<Route path="/stealing" element={5} />
				<Route path="/drugs" element={6} />
				<Route path="*" element={10} />
			</Routes>
		</div >
	);
};
