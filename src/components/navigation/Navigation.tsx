import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {    
  
    return (
      <div className="navigation">
          <div>
              <Link className="nav-link" to={""}><span>Crypto VC</span></Link>
          </div>
          <nav>
            <Link className="nav-link" to="jobs">Jobs</Link>
            <Link className="nav-button" to="apply">Apply</Link>
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
  