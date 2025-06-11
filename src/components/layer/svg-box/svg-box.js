// src/components/layer/svg-box.svg-box.js
import * as CrimeIcons from '../../../assets/icons/crime-icons';
import styles from './svg-box.module.css';

const iconComponents = {
   MurderIcon: CrimeIcons.MurderIcon,
   RobberyIcon: CrimeIcons.RobberyIcon
};

export const SvgBox = ({ iconName }) => {
   const IconComponent = iconComponents[iconName];

   return (
      <div className={styles.svgBox} key={iconName}>
         <IconComponent />
      </div>
   );
};