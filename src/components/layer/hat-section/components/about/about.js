import { useState } from 'react';
import { Button } from '../../../../ui';
import aboutClickSound from '../../../../../assets/audio/IBM notification.mp3';
import styles from './about.module.css';

export const About = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      const audio = new Audio(aboutClickSound);
      audio.play();
      setIsOpen(true);
   };

   const handleClose = () => setIsOpen(false);

   return (
      <>
         <Button onClick={handleClick} className={styles.rightBtn}>
            About
         </Button>

         <div
            className={`${styles.overlay} ${isOpen ? styles.on : ''}`}
         >
            <div className={styles.frame}>
               <div className={styles.frame_2}>
                  <div className={styles.frame_3}>
                     <div className={styles.text}>
                        <strong>
                           THE Criminal omsk REQUESTED STATISTICAL INFORMATION FROM THE MINISTRY OF INTERNAL AFFAIRS OF RUSSIA FOR THE OMSK REGION FOR THE PAST FIVE YEARS ON SUCH IMPORTANT INDICATORS OF STREET CRIME AS MURDERS, RAPES, ROBBERIES, THEFTS, AND CRIMES RELATED TO THE ILLEGAL DRUG TRADE. THE DATA IS PROVIDED FOR EACH OF THE FIVE URBAN DISTRICTS. THE CHARTS ALLOW OMSK RESIDENTS TO DRAW THEIR OWN CONCLUSIONS ABOUT THE SAFETY OF SPECIFIC AREAS.
                           <br /><br />
                           IT IS IMPORTANT TO NOTE THAT THERE IS A STEADY TREND TOWARDS A DECREASE IN THE NUMBER OF ALL TYPES OF CRIMES. FOR CERTAIN TYPES OF CRIMES, THE NUMBER OF VIOLATIONS HAS DECREASED BY MORE THAN HALF. THE DATA ON DETECTION RATES INCLUDES WORK ON CRIMINAL CASES FROM PREVIOUS YEARS.
                        </strong>
                     </div>
                     <Button
                        className={styles.ok}
                        onClick={handleClose}
                     >
                        Ok
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
