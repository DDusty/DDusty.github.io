import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './BollifyFeaturesComponent.css';

const BollifyFeaturesComponent = (): JSX.Element => {
  return (
    <div className='bollify-features-container'>
        <h2>Waarom Bollify?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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