import React from "react";
import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {    
  
    return (
      <div className="navigation">
          <div>
              <Link className="nav-link" to={""}><span>DogeFinance</span></Link>
          </div>
          <nav>
          <a className="nav-link" target="_blank" href={"https://gitbook.dogefinance.com"}><span>Docs</span></a>

            <Link className="nav-button" to="app">Coming soon</Link>
          </nav>
          {/* <ul>
              <li style={{marginRight: '24px'}}>
                <Link to={"/jobs"}>Jobs</Link>
              </li>
              <li className="nav-button">
                Apply
              </li>
          </ul> */}
      </div>
    );
  };
  
  export default Navigation;
  