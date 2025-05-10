import { Mode, Sound, About } from './components';
import styles from './hat-section.module.css';

export const HatSection = () => {
   return (
      <div className={styles.hatSection}>
         <div className={styles.left}>
            Criminal
            <span className={styles.span}>OMSK</span>
         </div>
         <div className={styles.right}>
            <Sound />
            <Mode />
            <About />
         </div>
      </div>
   );
};