import Icon from '../../../../../assets/img/Colorbtn.svg';
import { Button } from '../../../../ui';
import { useState, useEffect } from 'react';
import styles from './mode.module.css';

export const Mode = () => {
   const [isGreenMode, setIsGreenMode] = useState(() => {
      try {
         return localStorage.getItem('greenMode') === 'true';
      } catch {
         return false;
      }
   });

   // Эффект для применения темы
   useEffect(() => {
      const root = document.documentElement;

      if (isGreenMode) {
         root.classList.add('green-mode');
      } else {
         root.classList.remove('green-mode');
      }

      try {
         localStorage.setItem('greenMode', isGreenMode);
      } catch (error) {
         console.error('Failed to save theme preference:', error);
      }
   }, [isGreenMode]);

   const toggleTheme = () => {
      setIsGreenMode(prev => !prev);
   };

   return (
      <div className={styles.mode}>
         <Button
            onClick={toggleTheme}
            className={styles.rightBtn}
            aria-label={isGreenMode ? 'Switch to normal mode' : 'Switch to green mode'}
         >
            MODE
         </Button>
         <img
            className={`${isGreenMode ? styles.green : ''}`}
            src={Icon}
            alt="Theme icon"
         />
      </div>
   );
};