import React from 'react';
import './BollifyFooterComponent.css';

const BollifyFooterComponent = (): JSX.Element => {
  return (
      <div className='bollify-footer-container'>
        <footer>
            <div className="bottom_content">
                <section>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-telegram"></i></a>
                </section>
                <section>
                    <a href="#">Terms of service</a>
                    <a href="#">Privacy</a>
                    <a href="#">Copyright</a>
                    <a href="#">FAQ</a>
                </section>
            </div>
            <div className="copyright">
                Copyright © 2021 websitename - All rights reserved 
            </div>
        </footer>
      </div>
  );
};

export default BollifyFooterComponent;