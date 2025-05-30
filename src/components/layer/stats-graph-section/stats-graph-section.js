import { FieldsetBox } from '../../ui'
import styles from './stats-graph-section.module.css';

export const StatsGraphSection = ({ value, textStats }) => {
   return (
      <FieldsetBox className={styles.statsGraphSection} label="Danger rating">
         <div className={styles.value}>{value}</div>
         <div className={styles.textStats}>{textStats}</div>
      </FieldsetBox>
   );
}