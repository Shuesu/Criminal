import { Button } from '../../../../ui';
import aboutClickSound from '../../../../../assets/audio/IBM notification.mp3'; // Другой звук
import styles from './about.module.css'; // Импортируем стили

export const About = () => {
   return (
      <>
         <Button
            clickSound={aboutClickSound}
            className={styles.rightBtn}
         >
            About
         </Button>
      </>
   );
}