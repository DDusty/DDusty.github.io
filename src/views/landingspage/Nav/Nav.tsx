import { Button } from 'antd';
import React from 'react';
import './Nav.css';
// import {
//     Link
//   } from "react-router-dom";

const Nav = (): JSX.Element => {
  return (
      <div className='nav-container'>
          <div className='nav-logo'>
            <span style={{fontSize: '1.2rem', fontWeight: '900'}}>Bollify</span>
          </div>
          <div className='nav-call-to-action'>
            {/* <Link color="textPrimary" to="/App">
            Dashboard
            </Link> */}
            <Button type='primary'>Contact</Button>
          </div>
          {/* <Link color="textPrimary" to="/App" className={classes.link}>
            Dashboard
            </Link>
            <Link color="textPrimary" to="/Farm" className={classes.link}>
            Farm
            </Link>
            <Link color="textPrimary" to="/Nodes" className={classes.link}>
            Nodes
            </Link>
            <Link color="textPrimary" to="//gitbook.com" target='blank' className={classes.link}>
            Docs
            </Link> */}
      </div>
  );
};

export default Nav;