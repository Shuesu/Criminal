import { BarChart } from './components';
import { FieldsetBox } from '../../ui'
import styles from './chart-section.module.css';

export const ChartSection = () => {
   return (
      <FieldsetBox className={styles.chartSection} label="Crime occured">
         <BarChart />
      </FieldsetBox>
   );
}