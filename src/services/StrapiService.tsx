import React, { useEffect } from 'react';
import axios from 'axios';
import { LandingsPageType } from '../models/Strapi/LandingsPageModel';
import { StrapiContextType } from '../models/Strapi/StrapiContextType';

const defaultState: StrapiContextType = {
  landingsPage : {
    Title: "",
    About: "",
    Ucls: [],
    Questionnaire: [],
    FeatureBox: []
  }
};

export const StrapiServiceContext = React.createContext<StrapiContextType>(defaultState);

export const StrapiServiceProvider: React.FC = ({ children }): any => {
  const [landingsPage, setLandingsPage] = React.useState<LandingsPageType>(defaultState.landingsPage);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/landingspages?populate[0]=Ucls&populate[1]=Questionnaire.QuestionOptions&populate[2]=FeatureBox.FeatureImg`)
      .then(res => {
        const Title = res.data.data[0].attributes.Title;
        const About = res.data.data[0].attributes.About;
        const Ucls = res.data.data[0].attributes.Ucls;
        const Questionnaire = res.data.data[0].attributes.Questionnaire;
        const FeatureBox = res.data.data[0].attributes.FeatureBox;
        setLandingsPage({Title, About, Ucls, Questionnaire, FeatureBox});
      })
  }, []);

  return (
    <StrapiServiceContext.Provider value={{ landingsPage }}>
      {children}
    </StrapiServiceContext.Provider>
  );
};