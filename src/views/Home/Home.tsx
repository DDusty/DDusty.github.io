import { useState } from "react";
import Accordion from "../../components/accordion/Accordion";
import MotionDiv from "../../components/motiondiv";

const accordionData = [
  {
    key: 1,
    title: 'History',
    content: `JSCI, initially known as the “Alpha County” was created to bring together a close group of defi natives looking to collaborate and navigate the ever-evolving space together at the highest level possible. Nevertheless, within the group’s short but prosperous lifespan, JSCI has become more than a sacred location for alpha and project research.`
  },
  {
    key: 2,
    title: 'Mission',
    content: `While our focus and drive to remain at the top of defi will never fade, 
    JSCI was created in order for us to not just be the first to 
    use or find new protocols in the open economy, but also for us to be one
     of the first in giving a guiding hand in bringing new ideas to life.‍`
  },
  {
    key: 3,
    title: 'Values',
    content: `GM. Looks rare... probably nothing. Dyor Ape, Jfc... diamond hands. Welcome to Valhalla. GN.`
  }
];

const Home = (): JSX.Element => {    
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="home">
        <div className="home-header">
            <div className="home-header-wrapper">
              <span className="home-header-span reveal-text">Welcome to</span>
              <h1 className="home-header-title reveal-text">Crypto VC</h1>
              <p className="home-header-p reveal-text">Investing in early-stage DeFi Protocols, NFT ecosystems <br />and The Open Economy</p>
            </div>
        </div>
        <div className="accordion">
          {accordionData.map(({ key, title, content }, i) => (
            <MotionDiv delay={0.2 * i} direction={"UP"}>
              <div style={{width: '350px'}} key={key}><Accordion i={i} expanded={expanded} setExpanded={setExpanded} title={title} content={content} /></div>
            </MotionDiv>
          ))}
        </div>
    </div>
  );
};

export default Home;
