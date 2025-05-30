import styles from './text-scroll-section.module.css';

export const TextScrollSection = ({ crimeText, districtText }) => {
   return (
      <div className={styles.textScrollSection}>
         <div className={styles.crimeText}>{crimeText}</div>
         <div className={styles.districtText}>{districtText}</div>
      </div>
   );
}