import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './navigation-section.module.css';

export const NavigationSection = () => {
   const location = useLocation();

   return (
      <div className={styles.navigationSection}>
         <nav className={styles.navigation}>
            <Link to="/">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/'} // Подсветка для главной
               >
                  Murder
               </Button>
            </Link>
            <Link to="/robbery">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/robbery'}
               >
                  Robbery
               </Button>
            </Link>
            <Link to="/theft">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/theft'}
               >
                  Theft
               </Button>
            </Link>
            <Link to="/rape">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/rape'}
               >
                  Rape
               </Button>
            </Link>
            <Link to="/stealing">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/stealing'}
               >
                  Stealing
               </Button>
            </Link>
            <Link to="/drugs">
               <Button
                  className={styles.buttonLink}
                  isActive={location.pathname === '/drugs'}
               >
                  Drugs
               </Button>
            </Link>
         </nav>
      </div>
   );
};