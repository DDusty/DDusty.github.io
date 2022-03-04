import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './BollifyFeaturesComponent.css';

const BollifyFeaturesComponent = (): JSX.Element => {
  return (
    <div className='bollify-features-container'>
        <h2>Maak strategische keuzes aan de hand van statistieken</h2>
        <p>Creëer betere producten, positionering en concurrentiestrategieën met accurate statistieken. 
          <br />Bekijk uw winst, marktaandeel, rangschikking van concurrenten en meer in overzichtelijke grafieken.</p>
        <div className='bollify-features-wrapper'>
            <FeatureCard title='Bekijk jouw positie' icon='&#xf0c5;' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
            <FeatureCard title='Weet wat de concurentie doet' icon='&#xe923;' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
            <FeatureCard title='Verbeter je workflow' icon='&#xe8e5;' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
            <FeatureCard title='Automatiseer herhalende taken' icon='&#xeb9b;' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
        </div>
    </div>
  );
};

export default BollifyFeaturesComponent;