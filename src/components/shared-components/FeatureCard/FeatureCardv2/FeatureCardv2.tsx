import React from 'react';
import './FeatureCardv2.css';

interface props{
    title: string;
    icon: string;
    description: string;
}

const FeatureCardv2 = (props: props): JSX.Element => {
  return (
    <div className='feature-card-v2-container'>
        <div className='feature-card-v2-icon-container'>
            <span className="material-icons" style={{fontSize: '3rem'}}>{props.icon}</span>
        </div>
        <div className='feature-card-v2-text-container'>
            <span>{props.title}</span>
            <p>{props.description}</p>
            <a href="">Meer weten</a>
        </div>
    </div>
  );
};

export default FeatureCardv2;