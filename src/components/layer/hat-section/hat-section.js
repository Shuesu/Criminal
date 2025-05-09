import { useState } from 'react';
import { Button } from '../../ui';
import styles from './hat-section.module.css';
import modeIcon from '../../../assets/img/Colorbtn.svg';

export const HatSection = () => {
   const [isToggled, setIsToggled] = useState(true);
   const [isGreen, setIsGreen] = useState(false);
   return (
      <div className={styles.hatSection}>
         <div className={styles.left} >
            Criminal
            <span className={styles.span}>OMSK</span>
         </div >
         <div className={styles.right}>
            <Button
               isActive={isToggled}
               onClick={() => setIsToggled(!isToggled)}
               className={styles.rightBtn}
            >
               SOUND
            </Button>
            <div className={styles.mode}>
               <Button
                  onClick={() => setIsGreen(!isGreen)}
                  className={styles.rightBtn}
               >
                  MODE
               </Button>
               <img
                  className={`${styles.modeIcon} ${isGreen ? styles.green : ''}`}
                  src={modeIcon} alt="Фото"
               />
            </div>
            <Button
               className={styles.rightBtn}
            >
               About
            </Button>
         </div>
      </div >
   );
}
