import './App.css';
import Navigation from './components/navigation/Navigation';
import {AiFillMediumCircle} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

const App = ({children} : any) => {
  
  return (
    <div className="App">
      <Navigation />
      {children}
      {/* <div className='bg'> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 450"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
	      <feGaussianBlur stdDeviation="125" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="150" ry="150" cx="943.9553666548295" cy="216.80804165926844" fill="hsla(221, 96%, 38%, 1)"></ellipse><ellipse rx="150" ry="150" cx="289.802920254794" cy="-111.68157958984375" fill="hsl(316, 73%, 52%)"></ellipse><ellipse rx="150" ry="150" cx="674.5240312056108" cy="-81.85899075594816" fill="hsl(185, 100%, 57%)"></ellipse></g></svg> */}
      {/* </div> */}
     
        <div className='socials'>
          <div className='social-container'>
            <a rel="noreferrer" href='https://google.com' target={'_blank'} className='social-icon'>
              <AiFillMediumCircle size={50} color={"white"}/>
            </a>
          </div>
          <div className='social-container'>
            <a rel="noreferrer" href='https://google.com' target={'_blank'} className='social-icon'>
              <AiFillTwitterCircle size={50} color={"white"}/>
            </a>
          </div>
          <div className='social-container'>
            <a rel="noreferrer" href='https://google.com' target={'_blank'} className='social-icon'>
              <AiFillGithub size={50} color={"white"}/>
            </a>
          </div>
        </div>
   
    </div>
  );
}

export default App;
