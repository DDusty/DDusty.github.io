import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import MotionDiv from '../../components/motiondiv';

const Apply = (): JSX.Element => {    
  const [openOtherInput, SetOpenOtherInput] = useState(false);

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_7qc1vph', 'template_3m2qak8', form.current, 'JsH9kwrV0NcgVfarh')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });

  };

  const handleCheckbox = (event:any) => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    SetOpenOtherInput(openOtherInput => !openOtherInput);
  };
  
  return (
    <>
      <div className="apply">
        <div className='apply-wrapper'>
            <div>
                <h1 style={{width: 'fit-content'}} className="reveal-text">Apply</h1>
                <MotionDiv direction={"UP"}>
                  <p style={{width: 'fit-content', color: '#aaaaaa'}}>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  </p>
                </MotionDiv>
            </div>
            <div>
                <form className='apply-form' ref={form} onSubmit={sendEmail}>
                  <div className='apply-form-inputs-split'>
                    <MotionDiv className={'required-field'} direction={"UP"}>
                      <label>Firstname</label>
                      <input required type="text" name="firstname" />
                    </MotionDiv>

                    <MotionDiv className={'required-field'} delay={0.1} direction={"UP"}>
                      <label>Lastname</label>
                      <input required type="text" name="lastname" />
                    </MotionDiv>
                  </div>
                  <MotionDiv className={'required-field'} delay={0.2} direction={"UP"}>
                    <label>Email</label>
                    <input required type="email" name="email" />
                  </MotionDiv>
                  <div className='apply-form-inputs-split'>
                    <MotionDiv className={'required-field'} delay={0.3} direction={"UP"}>
                      <label>Company name</label>
                      <input required type="text" name="company" />
                    </MotionDiv>
                    <MotionDiv  delay={0.4} direction={"UP"}>
                      <label>Phone number</label>
                      <input type="number" name="phone" />
                    </MotionDiv>
                  </div>
                  <MotionDiv className={'required-field'} delay={0.4} direction={"UP"}>
                    <label>Investor type</label>
                    <select name="investor_type" placeholder='please select' defaultValue={""}>
                    <option value="" disabled >Select your option</option>
                      <option value="advisor">Advisor</option>
                      <option value="individual investor">Individual investor</option>
                      <option value="instustional investor">Institutional investor</option>
                    </select>
                  </MotionDiv>
                  <MotionDiv delay={0.4} direction={"UP"}>
                    <label>Which funds are you interested in?</label>
                    <div className='apply-checkbox-container'>
                      <input type="checkbox" value={"Early-stage token fund"} id="fund1" name="fund1"/>
                      <label htmlFor="fund">Early-stage token fund</label>
                    </div>
                    <div className='apply-checkbox-container'>
                      <input type="checkbox" value={"Blockchain fund"} id="fund2" name="fund2"/>
                      <label htmlFor="fund">Blockchain fund</label>
                    </div>
                    <div className='apply-checkbox-container'>
                      <input type="checkbox" onChange={handleCheckbox} id="fund3" name="fund3"/>
                      <label htmlFor="fund">Other</label>
                      {openOtherInput && <input style={{marginLeft: '8px', height: '11px'}} required type="text" name="funds" />}
                    </div>
                  </MotionDiv>
                  <MotionDiv style={{marginTop: '12px'}} className={'required-field'} delay={0.5} direction={"UP"}>
                    <label>Additional comment</label>
                    <textarea name="message" />
                  </MotionDiv>

                  <MotionDiv className={'required-field'} delay={0.5} direction={"UP"}>
                    <input className='form-submit' type="submit" value="Apply" />
                  </MotionDiv>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
