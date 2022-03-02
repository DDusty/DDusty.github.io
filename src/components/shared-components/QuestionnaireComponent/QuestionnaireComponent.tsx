import React from 'react';
import './QuestionnaireComponent.css';

const QuestionnaireComponent = (): JSX.Element => {
  return (
    <div className='questionnaire-container'>
        <div className='questionnaire-text-container'>
          <div className='questionnaire-text-wrapper'>
            <h2>De beste software voor Bol.com verkopers creëeren we samen.</h2>
            Om de functionaliteiten van Bollify te blijven verbeteren houden we contact met de grootste Bol.com verkopers. 
            <br /><br />Wil jij jouw droom software in handen hebben? Geef dan hier jou input! Bollify luistert en zal altijd blijven optimaliseren.
          </div>
        </div>
        <div className='questionnaire-questions-container'>
          <div className='questionnaire-box'>
            <span>1/3</span>
            <h2>Is Bollify beter dan de rest?</h2>
            <form>
              <div className='questionnaire-choice-container'>
                <input type="radio" id="age2" name="q1" value="Yes" />
                <label htmlFor="no">Ja</label><br />  
              </div>
              <div className='questionnaire-choice-container'>
                <input type="radio" id="age1" name="q1" value="No" />
                <label htmlFor="yes">Nee</label><br />
              </div>
              <input type="submit" value="Volgende" />
            </form>
          </div>
        </div>
    </div>
  );
};

export default QuestionnaireComponent;