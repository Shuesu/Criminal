import { FieldsetBox } from '../../ui'
import styles from './map-section.module.css';

export const MapSection = ({ districts, selectedDistrict, onSelectDistrict }) => {
   return (
      <FieldsetBox className={styles.mapSection} label="Pick a district">
         <div className={styles.districtButtons}>
            {districts.map(district => (
               <button
                  key={district.id}
                  className={selectedDistrict === district.id ? styles.active : ''}
                  onClick={() => onSelectDistrict(district.id)}
               >
                  {district.name}
               </button>
            ))}
         </div>
      </FieldsetBox>
   );
}