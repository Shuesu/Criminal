import { useRef, useEffect } from 'react';
import styles from './button.module.css';
import defaultClickSound from '../../../assets/audio/Light Switch Sound Effect.mp3';

export const Button = ({
   children,
   isActive,
   onClick,
   className,
   clickSound = defaultClickSound, // Пропс для кастомного звука
   disableClickSound = false, // Отключение звука, если нужно
   ...props
}) => {
   const audioRef = useRef(null);

   useEffect(() => {
      if (disableClickSound) return;

      audioRef.current = new Audio(clickSound); // Используем переданный звук или стандартный
      audioRef.current.volume = 0.3;

      return () => {
         if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
         }
      };
   }, [clickSound, disableClickSound]); // Зависимость от clickSound

   const handleClick = (e) => {
      if (!disableClickSound && audioRef.current) {
         audioRef.current.currentTime = 0;
         audioRef.current.play().catch((e) => console.error("Ошибка звука:", e));
      }

      if (onClick) onClick(e);
   };

   return (
      <button
         className={`${styles.button} ${isActive ? styles.active : ''} ${className || ''}`}
         onClick={handleClick}
         {...props}
      >
         {children}
      </button>
   );
};