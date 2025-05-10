import { useState, useEffect } from 'react';
import modeIcon from '../../../../../assets/img/Colorbtn.svg';
import { Button } from '../../../../ui';
import styles from './mode.module.css';

export const Mode = () => {
   const [isGreenMode, setIsGreenMode] = useState(() => {
      const saved = localStorage.getItem('greenMode');
      return saved === 'true';
   });

   // Эффект для применения темы при загрузке
   useEffect(() => {
      const root = document.documentElement;
      root.style.filter = isGreenMode ? 'hue-rotate(85deg)' : '';
   }, []); // Пустой массив зависимостей = выполняется только при монтировании

   const toggleTheme = () => {
      const newMode = !isGreenMode;
      setIsGreenMode(newMode);
      localStorage.setItem('greenMode', newMode);

      const root = document.documentElement;
      root.style.filter = newMode ? 'hue-rotate(85deg)' : '';
   };

   return (
      <div className={styles.mode}>
         <Button
            onClick={toggleTheme}
            className={styles.rightBtn}
         >
            MODE
         </Button>
         <img
            className={`${styles.modeIcon} ${isGreenMode ? styles.green : ''}`}
            src={modeIcon}
            alt="Theme icon"
         />
      </div>
   );
}