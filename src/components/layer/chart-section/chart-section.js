import { BarChart } from './components';
import styles from './chart-section.module.css';

export const ChartSection = () => {
   return (
      <div className={styles.chartSection}>
         <BarChart />
      </div>
   );
}