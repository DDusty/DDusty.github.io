import React from 'react';
import './FeatureCard.css';

interface props{
    title: string;
    icon: string;
    description: string;
}

const FeatureCard = (props: props): JSX.Element => {
  return (
    <div className='feature-card-container'>
        <div className='feature-card-icon-container'>
            <span className="material-icons" style={{color: 'blue', fontSize: '2.7rem'}}>{props.icon}</span>
        </div>
        <div className='feature-card-text-container'>
            <span>{props.title}</span>
            <p>{props.description}</p>
        </div>
    </div>
  );
};

export default FeatureCard;