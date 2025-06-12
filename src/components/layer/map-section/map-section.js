import { FieldsetBox } from '../../ui';
import styles from './map-section.module.css';
//svg icons
import { ReactComponent as СentralIcon } from './district-icons/central.svg';
import { ReactComponent as OktyabrskyIcon } from './district-icons/oktyabrsky.svg';
import { ReactComponent as LeninskyIcon } from './district-icons/leninsky.svg';
import { ReactComponent as KirovskyIcon } from './district-icons/kirovsky.svg';
import { ReactComponent as SovetskyIcon } from './district-icons/sovetsky.svg';
//audio
import FloppyDrive1 from '../../../assets/audio/Floppy Drive_1.mp3';
import FloppyDrive2 from '../../../assets/audio/Floppy Drive_2.mp3';
import FloppyDrive3 from '../../../assets/audio/Floppy Drive_3.mp3';

// Маппинг иконок
const iconMap = {
   district1: СentralIcon,
   district2: OktyabrskyIcon,
   district3: LeninskyIcon,
   district4: KirovskyIcon,
   district5: SovetskyIcon,
};

// Маппинг звуков 
const soundMap = {
   district1: FloppyDrive2, // Central
   district2: FloppyDrive1, // Oktyabrsky
   district3: FloppyDrive2, // Leninsky
   district4: FloppyDrive3, // Kirovsky 
   district5: FloppyDrive1, // Sovetsky
};

export const MapSection = ({ districts, selectedDistrict, onSelectDistrict }) => {
   const selectedDistrictData = districts.find(d => d.id === selectedDistrict) || districts[0];

   // Функция для воспроизведения звука
   const playSound = (districtId) => {
      const audio = new Audio(soundMap[districtId]);
      audio.volume = 1;
      audio.play().catch(e => console.error("Ошибка воспроизведения:", e));
   };

   // Маппинг CSS-классов
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
                        playSound(district.id); // Воспроизводим звук
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