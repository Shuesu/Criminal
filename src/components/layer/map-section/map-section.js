// src/components/layer/map-section/map-section.jsx
import { FieldsetBox } from '../../ui';
import styles from './map-section.module.css';
import { ReactComponent as District1Icon } from './district-icons/central.svg';
import { ReactComponent as District2Icon } from './district-icons/oktyabrsky.svg';
import { ReactComponent as District3Icon } from './district-icons/leninsky.svg';
import { ReactComponent as District4Icon } from './district-icons/kirovsky.svg';
import { ReactComponent as District5Icon } from './district-icons/sovetsky.svg';

const iconMap = {
   district1: District1Icon,
   district2: District2Icon,
   district3: District3Icon,
   district4: District4Icon,
   district5: District5Icon,
};

export const MapSection = ({ districts, selectedDistrict, onSelectDistrict }) => {
   // Находим выбранный район
   const selectedDistrictData = districts.find(d => d.id === selectedDistrict) || districts[0];

   return (
      <FieldsetBox className={styles.mapSection} label="Districts">
         <div className={styles.districtButtons}>
            {districts.map(district => {
               const Icon = iconMap[district.id];
               return (
                  <a
                     key={district.id}
                     href={`#${district.id}`}
                     className={`${styles.link} ${selectedDistrict === district.id ? styles.active : ''}`}
                     onClick={(e) => {
                        e.preventDefault();
                        onSelectDistrict(district.id);
                     }}
                     aria-label={`Select ${district.name} district`}
                  >
                     {Icon && <Icon className={styles.icon} />}
                  </a>
               );
            })}
         </div>
         <div className={styles.districtMap}>
            {selectedDistrictData.name} District
         </div>
      </FieldsetBox>
   );
};