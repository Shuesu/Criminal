// src/components/layer/text-scroll-section/text-scroll-section.js
import styles from './text-scroll-section.module.css';

export const TextScrollSection = ({ crimeText, districtText }) => {
   // Если districtText — массив, рендерим каждый элемент с отступами
   const renderDistrictText = () => {
      if (Array.isArray(districtText)) {
         return districtText.map((line, index) => (
            <p key={index} className={styles.districtLine}>
               {line}
            </p>
         ));
      }
      // Если districtText — строка, рендерим как есть
      return <p className={styles.districtLine}>{districtText}</p>;
   };

   return (
      <div className={styles.textScrollSection}>
         <div className={styles.textContainer}>
            <div className={styles.crimeText}>{crimeText}</div>
            <div className={styles.districtText}>{renderDistrictText()}</div>
         </div>
      </div>
   );
};