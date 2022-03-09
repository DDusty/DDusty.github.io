import React from 'react';
import './TimelineComponent.css';
import illustration from '../../../assets/img/illustration.png';
import { StrapiContextType } from 'models/Strapi/StrapiContextType';
import { StrapiServiceContext } from 'services/StrapiService';


const TimelineComponent = (): JSX.Element => {
    // first timeline__point item style={{top, '0'}}, last child top 100%
    // style={{bottom: '50%'}} last item timeline__middle and for first top: 50%
    const { landingsPage } = React.useContext(
        StrapiServiceContext
    ) as StrapiContextType;

  return (
      <div className='timeline-container'>
        <div className="timeline">

            {landingsPage.Timeline.map((item, i, {length}) => {
                if(i % 2 == 0) {
                    return (
                    <>
                        <div className="timeline__component">
                            <div className='timeline_img_container'>
                                <img src={"http://localhost:1337" + item.TimelineImg.data.attributes.url}/>
                            </div>
                        </div>
                        <div className="timeline__middle" style={{...(i == 0 && {top: '50%'}), ...(i + 1 == length && {bottom: '50%'}) }}>
                            <div className="timeline__point" style={{...(i == 0 && {top: '0'}), ...(i + 1  == length && {top: '100%'}) }}></div>
                        </div>
                        <div className="timeline__component timeline__component--bg">
                            <h2 className="timeline__title">{item.TimelineTitle}</h2>
                            <p className="timeline__paragraph">
                                {item.TimelineDescription}
                            </p>
                        </div>
                    </>
                    )
                } else {
                    return (
                    <>
                    <div className="timeline__component timeline__component--bg">
                        <h2 className="timeline__title">{item.TimelineTitle}</h2>
                        <p className="timeline__paragraph">
                            {item.TimelineDescription}
                        </p>
                    </div>
    
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component">
                        <div className='timeline_img_container'>
                            <img src={"http://localhost:1337" + item.TimelineImg.data.attributes.url}/>
                        </div>
                    </div>
                    </>
                    )
                }
                
            })}

        {/* <div className="timeline__component">
                <div className='timeline_img_container'>
                    <img src={illustration}/>
                </div>
            </div>
            <div className="timeline__middle" style={{top: '50%'}}>
                <div className="timeline__point" style={{top: '0'}}></div>
            </div>
            <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">The beggining</h2>
                <p className="timeline__paragraph">
                RIETE is set up in 2001 with 25 Spanish physicians participating in sharing the data of their patients in a single database.
                </p>
            </div>
    
            <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">The first article</h2>
                <p className="timeline__paragraph">
                We publish our first original article, at The New England Journal of Medicine.
                </p>
            </div>
    
            <div className="timeline__middle">
                <div className="timeline__point"></div>
            </div>
            <div className="timeline__component">
                <div className='timeline_img_container'>
                    <img src={illustration}/>
                </div>
            </div>
    
            <div className="timeline__component">
                <div className='timeline_img_container'>
                    <img src={illustration}/>
                </div>
            </div>
            <div className="timeline__middle" style={{bottom: '50%'}}>
                <div className="timeline__point" style={{top: '100%'}}></div>
            </div>
    
            <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">RIETE around the world</h2>
                <p className="timeline__paragraph">
                The database's website is translated into English, aimed to expand RIETE to other countries.
                </p>
            </div> */}
        </div>
    </div>
    );
};

export default TimelineComponent;