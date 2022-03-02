import React from 'react';
import './PartnersEarningsComponent.css';
import CountUp from 'react-countup';

const PartnersEarningsComponent = (): JSX.Element => {
  return (
    <div className='partners-earnings-container'>
        <div className='partners-earnings-wrapper'>
            <div className='partners-earnings-item-container'>
                <CountUp style={{fontSize: '50px'}} end={17} />
                <span style={{fontSize: '18px'}}>Mensen geholpen</span>
            </div>
            <div className='partners-earnings-item-container'>
                <CountUp style={{fontSize: '50px'}} end={138492} separator={'.'} />
                <span style={{fontSize: '18px'}}>Omzet gemaakt</span>
            </div>
            <div className='partners-earnings-item-container'>
                <CountUp style={{fontSize: '50px'}} end={0} />
                <span style={{fontSize: '18px'}}>Stress momenten gehad</span>
            </div>
        </div>
    </div>
  );
};

export default PartnersEarningsComponent;