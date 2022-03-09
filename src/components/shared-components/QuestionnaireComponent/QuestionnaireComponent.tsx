import { QuestionnaireType } from 'models/Strapi/LandingsPageModel';
import { StrapiContextType } from 'models/Strapi/StrapiContextType';
import React, { useEffect, useState } from 'react';
import { StrapiServiceContext } from 'services/StrapiService';
import './QuestionnaireComponent.css';

const QuestionnaireComponent = (): JSX.Element => {
  const [nOfQuestion, setNOfQuestion] = useState(0);

  const { landingsPage } = React.useContext(
    StrapiServiceContext
  ) as StrapiContextType;

  function handleNextOnClick(e: any) {
    e.preventDefault();
    // setNOfQuestion(prev => (prev + 1) % props.length)
    setNOfQuestion(nOfQuestion + 1);
  }

  return (
    <div className='questionnaire-container'>
        <div className='questionnaire-text-container'>
          <div className='questionnaire-text-wrapper'>
            <h2>De beste software voor Bol.com verkopers creëeren we samen.</h2>
            Om de functionaliteiten van Bollify te blijven verbeteren houden we contact met de grootste Bol.com verkopers. 
            <br /><br />Wil jij jouw droom software in handen hebben? Geef dan hier jou input! Bollify luistert en zal altijd blijven optimaliseren.
          </div>
        </div>
        {landingsPage.Questionnaire.length > 0 ? (
          <div className='questionnaire-questions-container'>
            <div className='questionnaire-box'>
              <span>{nOfQuestion + 1}/{landingsPage.Questionnaire.length}</span>
              {landingsPage.Questionnaire[nOfQuestion].QuestionTitle}
              <h2></h2>
              <form>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', margin: '1.5rem 0rem'}}>
                {landingsPage.Questionnaire[nOfQuestion].QuestionOptions.map((item, i ) => {
                  return (
                    <div className='questionnaire-choice-container'>
                      <input type="radio" id={item.Options} name="questionnaire" value={item.Options} />
                      <label htmlFor={item.Options}>{item.Options}</label><br />  
                    </div>
                  )
                  
                })}
                </div>
                {/* <div className='questionnaire-choice-container'>
                  <input type="radio" id="age2" name="q1" value="Yes" />
                  <label htmlFor="no">Ja</label><br />  
                </div>
                <div className='questionnaire-choice-container'>
                  <input type="radio" id="age1" name="q1" value="No" />
                  <label htmlFor="yes">Nee</label><br />
                </div> */}
                <button onClick={(e) => {handleNextOnClick(e)}}>next</button>
               
              </form>
            </div>
             {/* <input type="submit"  value="Volgende" /> */}
          </div>
        ) : (
          <div className='questionnaire-questions-container'>
            <p>loading</p>
            </div>
        )}
        
    </div>
  );
};

export default QuestionnaireComponent;