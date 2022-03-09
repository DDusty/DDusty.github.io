import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './Nav.css';
import {
  Link
} from "react-router-dom";
import  logo from '../../../assets/img/logo.svg';
import { StrapiServiceContext } from 'services/StrapiService';
import { StrapiContextType } from 'models/Strapi/StrapiContextType';


const Nav = (): JSX.Element => {
  const { landingsPage } = React.useContext(
    StrapiServiceContext
  ) as StrapiContextType;

  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("transparent");
  const [border, setBorder] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
    window.scrollY > 10 ? setBorder(true) : setBorder(false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
      <div className='nav-container' style={{
        height: navSize,
        backgroundColor: navColor,
        transition: "all 1s",
        boxShadow: border ? "rgb(0 0 0 / 12%) 0 1px 3px" : ""
      }}>
          <div className='nav-logo'>
            <img src={ logo } style={{width: '40px', marginTop: '-9px', marginRight: '13px'}}/>
            <span style={{fontSize: '1.2rem', fontWeight: '900'}}>Bollify</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='nav-links'>
              {landingsPage.FeatureBox.map((feature, i) => {  
                return(
                  <a href={"#" + feature.FeatureName}>{feature.FeatureName}</a>
                )
                })}
              <a href='#features'>Roadmap</a>
              {/* <Link to="#Listing Guide">
                Dashboard
              </Link> */}
            </div>
            <div className='nav-call-to-action'>
              <Button type='primary'>Meld je aan voor de pilot</Button>
            </div>
          </div>
      </div>
  );
};

export default Nav;