// src/components/CrimeContent.jsx
import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { crimeData } from '../../../data/data';
import { MapSection, ChartSection, StatsGraphSection, TextScrollSection, SvgBox } from '../../../components';

export const CrimeContent = () => {
   const { crimeType = "murder" } = useParams();
   const [selectedDistrict, setSelectedDistrict] = useState('district1');

   // Используем useMemo для стабильных данных
   const { currentCrime, currentDistrict } = useMemo(() => {
      const crime = crimeData.find(crime => crime.id === crimeType) || crimeData[0];
      const district = crime.districts.find(d => d.id === selectedDistrict) || crime.districts[0];
      return { currentCrime: crime, currentDistrict: district };
   }, [crimeType, selectedDistrict]);

   console.log('Current icon:', currentCrime.icon); // Для отладки

   return (
      <>
         <MapSection
            districts={currentCrime.districts}
            selectedDistrict={selectedDistrict}
            onSelectDistrict={setSelectedDistrict}
         />
         <ChartSection data={currentDistrict.chartData} />
         <StatsGraphSection
            value={currentDistrict.stats}
            textStats={currentCrime.textStats}
         />
         <TextScrollSection
            crimeText={currentCrime.textScroll}
            districtText={currentDistrict.textScroll}
         />
         <SvgBox
            iconName={currentCrime.icon}
            key={`${crimeType}-${selectedDistrict}`} // Уникальный ключ
         />
      </>
   );
};