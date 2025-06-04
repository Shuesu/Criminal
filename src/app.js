import { TVlayer, HatSection, NavigationSection, RunTextSection } from './components';
import styles from './app.module.css';
import { CrimeContent } from './components';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<div className={styles.container}>
			<TVlayer />
			<header>
				<HatSection />
				<NavigationSection />
				<RunTextSection />
			</header>

			<main className={styles.main}>
				<Routes>
					<Route path="/crime/:crimeType" element={<CrimeContent />} />
					<Route path="*" element={<div>Выберите категорию преступления</div>} />
				</Routes>
			</main>
		</div>
	);
};
