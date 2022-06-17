import { useEffect, useState } from "react";
import MotionDiv from "../../components/motiondiv";
import { getJobs } from "../../firebase";
import {HiChevronRight} from 'react-icons/hi';
import { Puff } from 'react-loading-icons'

const Jobs = (): JSX.Element => {    
    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getJobs().then(jobs => {
            setLoading(false);
            setJobs(jobs)
        })        
    }, [])
  
    return (
      <div className="container">
        <div className="jobs">
            <div>
                <h1 style={{width: 'fit-content'}} className="reveal-text">Current jobs</h1>
                <p style={{width: 'fit-content'}} className="reveal-text">Current positions open at <br /> Crypto VC</p>
            </div>

            
                {loading && (
                    <div style={{width: '100%', marginTop: '70px', textAlign: 'center'}}>
                        <Puff stroke="#06bcee"/>
                    </div>
                )}

            {jobs && (
                jobs.map((job: any, index: number) => {
                    return (
                        <MotionDiv delay={0.1 * index} direction={"LEFT"}>

                        <div key={index} className="jobs-container">
                            <div className="job-info-container">
                                <h2>{job.Title}</h2>
                                <ul style={{marginTop: '12px'}}>
                                    {job.Description.map((item: any, index: number) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="job-tags-container">
                                {/* tags */}
                                {job.Tags.map((tag: any, index: number) => {
                                    return (
                                        <div key={index} className="tag">{tag}</div>
                                    )
                                })}
                            </div>
                            <div className="job-button-container">
                                {/* button apply */}
                                <a rel="noreferrer" target={"_blank"} href={job.Link}><div style={{lineHeight: '1'}}>Read more</div><HiChevronRight /></a>
                            </div>
                        </div>
                        </MotionDiv>
                    )
                })
            )}
        </div>
      </div>
    );
  };
  
  export default Jobs;
  