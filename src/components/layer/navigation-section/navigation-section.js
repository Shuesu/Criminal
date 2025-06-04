import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './navigation-section.module.css';

export const NavigationSection = () => {
   const location = useLocation();

   return (
      <div className={styles.navigationSection}>
         <nav className={styles.navigation}>
            <Link to="/crime/murder">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/murder'}
               >
                  Murder
               </Button>
            </Link>
            <Link to="/crime/robbery">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/robbery'}
               >
                  Robbery
               </Button>
            </Link>
            <Link to="/crime/theft">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/theft'}
               >
                  Theft
               </Button>
            </Link>
            <Link to="/crime/rape">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/rape'}
               >
                  Rape
               </Button>
            </Link>
            <Link to="/crime/stealing">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/stealing'}
               >
                  Stealing
               </Button>
            </Link>
            <Link to="/crime/drugs">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/crime/drugs'}
               >
                  Drugs
               </Button>
            </Link>

         </nav>
      </div>
   );
};