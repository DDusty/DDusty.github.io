import FeatureCardv2 from 'components/shared-components/FeatureCard/FeatureCardv2/FeatureCardv2';
import AnkerLink from 'components/util-components/Anker/AnkerLink';
import { StrapiContextType } from 'models/Strapi/StrapiContextType';
import React, { useState } from 'react';
import { StrapiServiceContext } from 'services/StrapiService';
import './AboutComponent.css';

const AboutComponent = (): JSX.Element => {
  const { landingsPage } = React.useContext(
    StrapiServiceContext
  ) as StrapiContextType;
  
  return (
    <div className='about-container' id="features">
      <div className='about-wrapper'>
        <h2>{landingsPage.About}</h2>
        <p>Creëer betere producten, positionering en concurrentiestrategieën met accurate statistieken. 
          Bekijk uw winst, marktaandeel, rangschikking van concurrenten en meer in overzichtelijke grafieken.</p>
        <div className='features-v2-container'>
        {landingsPage.FeatureBox.map((feature, i) => {  
        return (
            <AnkerLink {...feature}
           />
          )
        })} 
       </div>
      </div>
    </div>
  );
};

export default AboutComponent;