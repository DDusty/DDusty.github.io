import FeatureCardv2 from '../../../components/shared-components/FeatureCard/FeatureCardv2/FeatureCardv2';
import { FeatureType } from '../../../models/Strapi/LandingsPageModel';
import { StrapiContextType } from '../../../models/Strapi/StrapiContextType';
import React, { useState } from 'react';

const AnkerLink = (props: FeatureType): JSX.Element => {
  const [hover, setHover] = useState(false);  

  const style = ({query: {hover, color}} : {query: {hover: boolean, color: string}}) => ({
    display: 'flex',
    boxShadow: hover ? "inset 0 -1.25em 0 " + color : "inset 0 -0.45em 0 " + color,
    transition: "box-shadow 0.5s ease",
  });
  
  return (
    <a href={'#' + props.FeatureName} style={style({query: {hover, color: props.FeatureBackgroundColorCode}})}
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={() => setHover(false)}
    >{props.FeatureName}<span className="material-icons" style={{fontSize: '1.7rem', display: 'flex', alignItems: 'center'}}>&#xe5cc;</span></a>
  );
};

export default AnkerLink;