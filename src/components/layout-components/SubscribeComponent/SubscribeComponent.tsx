import React from 'react';
import './SubscribeComponent.css';

const SubscribeComponent = (): JSX.Element => {
  return (
      <div className='subscribe-container'>
        <div className='subscribe-left-container'>
            <div className='subscribe-box'>
                <h2>Mis geen update</h2>
                <p>
                Om de functionaliteiten van Bollify te blijven verbeteren houden we contact met de grootste Bol.com verkopers.
                </p>
                <form>
                    <input type="text" placeholder='Voer je email in' />
                    <input type="submit" value="Aanmelden" />
                </form>
            </div>
        </div>
        <div className='subscribe-right-container'>

        </div>
      </div>
  );
};

export default SubscribeComponent;