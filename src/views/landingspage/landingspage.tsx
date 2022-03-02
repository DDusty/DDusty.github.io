import { Button, Form, Input } from 'antd';
import React from 'react';
import './landingspage.css';
import Nav from './Nav/Nav';
import bg from '../../assets/img/background.png';
import illustration from '../../assets/img/illustration.png';
import PartnersEarningsComponent from 'components/shared-components/PartnersEarningsComponent/PartnersEarningsComponent';
import QuestionairComponent from 'components/shared-components/QuestionnaireComponent/QuestionnaireComponent';
import AboutComponent from 'components/layout-components/AboutComponent/AboutComponent';
import BollifyFeaturesComponent from 'components/shared-components/BollifyFeaturesComponent/BollifyFeaturesComponent';
import Footer from 'components/layout-components/Footer';
import ContactComponent from 'components/layout-components/ContactComponent/ContactComponent';

const LandingsPage = (): JSX.Element => {
  return (
    <>
      <Nav />
      {/* style={{backgroundImage: `url('${bg}')` }} */}
      <div  className='landingspage-container'>
          <div className='landingspage-header-text'>
            <div className='landingspage-header-text-wrapper'>
              <h1 style={{color: 'black', fontWeight: '300'}}>In één oogopslag zien hoe je jouw <b>vindbaarheid op Bol.com</b> kunt verbeteren?</h1>
              <div className='landingspage-header-list'>
                <div style={{display: 'flex', flexDirection: 'row',}}><span className="material-icons" style={{color: 'green' ,marginRight: '5px'}}>&#xE86C;</span><span className='landingspage-header-list-item-text'>Verhoog jouw workflow</span></div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '14px'}}><span className="material-icons" style={{color: 'green', marginRight: '5px'}}>&#xE86C;</span><span className='landingspage-header-list-item-text'>Scoor hoger op Bol.com</span></div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '14px'}}><span className="material-icons" style={{color: 'green', marginRight: '5px'}}>&#xE86C;</span><span className='landingspage-header-list-item-text'>Verlaag personeelskosten</span></div>
              </div>
              <Form><Input type="text" placeholder='Naam' /><Input type="text"placeholder='Email' /><Button type='primary'>Probeer Gratis</Button></Form>
            </div>
          </div>
          <div className='landingspage-header-image'>
            <img src={illustration} />
          </div>
      </div>
      <PartnersEarningsComponent />
      <AboutComponent />
      <QuestionairComponent />
      <BollifyFeaturesComponent />
      <ContactComponent />
      {/* <Footer /> */}
    </>
  );
};

export default LandingsPage;