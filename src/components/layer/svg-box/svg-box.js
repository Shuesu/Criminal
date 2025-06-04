// src/components/SvgBox.jsx
import React from 'react';
import * as CrimeIcons from '../../../assets/icons/crime-icons.jsx';
import styles from './svg-box.module.css';

const iconComponents = {
   MurderIcon: CrimeIcons.MurderIcon,
   RobberyIcon: CrimeIcons.RobberyIcon
};

export const SvgBox = ({ iconName }) => {
   const IconComponent = iconComponents[iconName];

   if (!IconComponent) {
      console.error(`Иконка "${iconName}" не найдена. Доступные:`, Object.keys(iconComponents));
      return <div className={styles.svgBox}>Иконка не найдена</div>;
   }

   return (
      <div className={styles.svgBox} key={iconName}>
         <IconComponent />
      </div>
   );
};