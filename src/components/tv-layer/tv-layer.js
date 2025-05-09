import styles from './tv-layer.module.css';

export const TVlayer = () => {
   return (
      <div className="tvLayer">
         <div className={styles.gridOverlay}></div>
         <div className={styles.tvLines}>
            <div className={`${styles.tvLine} ${styles.lineUp1}`} />
            <div className={`${styles.tvLine} ${styles.lineDown1}`} />
            <div className={`${styles.tvLine} ${styles.lineDown2}`} />
         </div>
      </div>
   );
}
