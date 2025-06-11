// src/components/layer/map-section/map-section.jsx
import { FieldsetBox } from '../../ui';
import styles from './map-section.module.css';
import { ReactComponent as СentralIcon } from './district-icons/central.svg';
import { ReactComponent as OktyabrskyIcon } from './district-icons/oktyabrsky.svg';
import { ReactComponent as LeninskyIcon } from './district-icons/leninsky.svg';
import { ReactComponent as KirovskyIcon } from './district-icons/kirovsky.svg';
import { ReactComponent as SovetskyIcon } from './district-icons/sovetsky.svg';

const iconMap = {
   district1: СentralIcon,
   district2: OktyabrskyIcon,
   district3: LeninskyIcon,
   district4: KirovskyIcon,
   district5: SovetskyIcon,
};

export const MapSection = ({ districts, selectedDistrict, onSelectDistrict }) => {
   const selectedDistrictData = districts.find(d => d.id === selectedDistrict) || districts[0];

   const districtClassMap = {
      district1: 'central',
      district2: 'oktyabrsky',
      district3: 'leninsky',
      district4: 'kirovsky',
      district5: 'sovetsky'
   };

   return (
      <FieldsetBox className={styles.mapSection} label="Districts">
         <div className={styles.districtButtons}>
            {districts.map(district => {
               const Icon = iconMap[district.id];
               const districtClass = districtClassMap[district.id];

               return (
                  <a
                     key={district.id}
                     href={`#${district.id}`}
                     className={`${styles.link} ${styles[districtClass]} ${selectedDistrict === district.id ? styles.active : ''
                        }`}
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