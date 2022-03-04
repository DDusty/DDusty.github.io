import React from 'react';
import './FeatureBoxComponent.css';
import { FeatureType } from '../../../models/Strapi/LandingsPageModel';
import ReactMarkdown from 'react-markdown';

const FeatureBoxComponent = (prop: FeatureType): JSX.Element => {
  return (
    <div id={prop.FeatureName} className='feature-box-text-container'>
        <div className='feature-box-text-box' style={{backgroundColor: prop.FeatureBackgroundColorCode}}>
            <div className='feature-box-text-wrapper'>
              {prop.FeatureTextLeft ? (
                <>
                  <div className='box-left-leftside'>
                      <span>{prop.FeatureName}</span>
                      <h2><ReactMarkdown>{prop.FeatureHeaderText}</ReactMarkdown></h2>
                      <p>
                        {prop.FeatureDescription}       
                      </p>
                  </div>
                  <div className='box-left-rightside'>
                      <img style={{width: '100%'}} src={"http://localhost:1337" + prop.FeatureImg.data.attributes.url} />
                  </div>
                </>
              ) : (
                <>
                <div className='box-left-rightside' style={{marginRight: '2rem'}}>
                    <img style={{width: '100%'}} src={"http://localhost:1337" + prop.FeatureImg.data.attributes.url} />
                </div>
                <div className='box-left-leftside' style={{paddingLeft: '1rem'}}>
                    <span>{prop.FeatureName}</span>
                    <h2><ReactMarkdown>{prop.FeatureHeaderText}</ReactMarkdown></h2>
                    <p>
                      {prop.FeatureDescription}       
                    </p>
                </div>
              </>
               )}
            </div>
        </div>
    </div>
  );
};

export default FeatureBoxComponent;