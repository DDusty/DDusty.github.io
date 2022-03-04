import React from 'react';
import './ContactComponent.css';

const ContactComponent = (): JSX.Element => {
  return (
    <div className='contact-container'>
        <div className='contact-text-container'>
            <div className='contact-text-wrapper'>
                <h2>Contact</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div className='contact-form-container'>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  );
};

export default ContactComponent;