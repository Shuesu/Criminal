import { TVlayer, HatSection, NavigationSection, RunTextSection } from './components';
import styles from './app.module.css';
import { CrimeContent } from './components';

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
				<CrimeContent />
			</main>
		</div>
	);
};