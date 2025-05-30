import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { crimeData } from '../../../data/data';
import { MapSection, ChartSection, StatsGraphSection, TextScrollSection, SvgBox } from '../../../components';

export const CrimeContent = () => {
   const { crimeType = "murder" } = useParams();
   const [selectedDistrict, setSelectedDistrict] = useState('district1');

   const currentCrime = crimeData.find(crime => crime.id === crimeType) || crimeData[0];
   const currentDistrict = currentCrime.districts.find(d => d.id === selectedDistrict) || currentCrime.districts[0];

   const renderContent = () => (
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
         <SvgBox svgPath={currentCrime.svgPath} />
      </>
   );

   return renderContent();
};