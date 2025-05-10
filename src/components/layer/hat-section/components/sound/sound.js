import { useState, useEffect, useRef } from 'react';
import { Button } from '../../../../ui';
import soundFile from '../../../../../assets/audio/Crimes of Tagil 2.mp3'; // Импортируем аудиофайл
import styles from './sound.module.css';

export const Sound = () => {

   const [isToggled, setIsToggled] = useState(false);
   const audioRef = useRef(null);

   // Инициализация аудио
   useEffect(() => {
      audioRef.current = new Audio(soundFile);
      audioRef.current.loop = true;

      return () => {
         if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
         }
      };
   }, []);

   // Управление воспроизведением
   useEffect(() => {
      if (!audioRef.current) return;

      if (isToggled) {
         audioRef.current.play().catch(e => console.error("Ошибка воспроизведения:", e));
      } else {
         audioRef.current.pause();
      }
   }, [isToggled]);

   const toggleSound = () => {
      setIsToggled(!isToggled);
   };

   return (
      <Button
         isActive={!isToggled}
         onClick={toggleSound}
         className={styles.rightBtn}
      >
         SOUND
      </Button>
   );
}