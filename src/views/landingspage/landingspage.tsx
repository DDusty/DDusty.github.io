import { Button, Form, Input } from 'antd';
import React from 'react';
import './landingspage.css';
import Nav from './Nav/Nav';
import bg from '../../assets/img/background.png';
import illustration from '../../assets/img/illustration.png';
import PartnersEarningsComponent from '../../components/shared-components/PartnersEarningsComponent/PartnersEarningsComponent';
import QuestionairComponent from '../../components/shared-components/QuestionnaireComponent/QuestionnaireComponent';
import AboutComponent from '../../components/layout-components/AboutComponent/AboutComponent';
import BollifyFeaturesComponent from '../../components/shared-components/BollifyFeaturesComponent/BollifyFeaturesComponent';
import Footer from '../../components/layout-components/Footer';
import ContactComponent from '../../components/layout-components/ContactComponent/ContactComponent';
import { StrapiContextType } from '../../models/Strapi/StrapiContextType';
import { StrapiServiceContext } from '../../services/StrapiService';
import ReactMarkdown from 'react-markdown'
import FeatureBoxComponent from '../../components/layout-components/FeatureBoxComponent/FeatureBoxComponent';
import BollifyFooterComponent from '../../components/layout-components/BollifyFooterComponent/BollifyFooterComponent';

const LandingsPage = (): JSX.Element => {
  const { landingsPage } = React.useContext(
    StrapiServiceContext
  ) as StrapiContextType;

  return (
    <>
      <Nav />
      {/* style={{backgroundImage: `url('${bg}')` }} */}
      {/* In één oogopslag zien hoe je jouw <b>vindbaarheid op Bol.com</b> kunt verbeteren? */}
      <div  className='landingspage-container'>
          <div className='landingspage-header-text'>
            <div className='landingspage-header-text-wrapper'>
              <h1 style={{fontWeight: '300'}}><ReactMarkdown>{landingsPage.Title}</ReactMarkdown></h1>
              <div className='landingspage-header-list'>
              {landingsPage.Ucls.map((ucl, i) => {                   
                return (
                  <div style={{display: 'flex', flexDirection: 'row', marginTop: i > 0 ? '14px' : '0px'}}>
                    <span className="material-icons" style={{color: 'green' ,marginRight: '5px'}}>&#xE86C;</span>
                    <span className='landingspage-header-list-item-text'>
                      {ucl.Ucl}
                    </span>
                  </div>
                ) 
              })}
              </div>
              <Form><Input type="text"placeholder='Voer je email in.' /><Button type='primary'>Probeer Gratis</Button></Form>
            </div>
          </div>
          <div className='landingspage-header-image'>
            <img src={illustration} />
          </div>
      </div>
      {/* <PartnersEarningsComponent /> */}
      <AboutComponent />
      {landingsPage.FeatureBox.map((feature, i) => {  
        return (
        <FeatureBoxComponent {...feature} />
        )
      })}
     
      <QuestionairComponent />
      <BollifyFooterComponent />
      {/* <BollifyFeaturesComponent /> */}
      {/* <ContactComponent /> */}
      {/* <Footer /> */}
    </>
  );
};

export default LandingsPage;