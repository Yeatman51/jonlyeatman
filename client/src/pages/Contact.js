import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_oLKAP5jY1WtcmEsTMVxh3");
// import Form from '../components/Form.js';

const Result = () => {
   return(
      <p>Your message has been successfully sent.</p>
   );
}

function Contact() {

      const form = useRef();
      
      const [result, showResult] = useState(false);
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o8zxx9v', 'template_sc8zx0n', form.current, 'user_oLKAP5jY1WtcmEsTMVxh3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         e.target.reset();
         showResult(true);
      };

      // Hide Result
      setTimeout(() => {
         showResult(false);
      }, 5000);

    return (
        <div>
            <div className="contact-text-container">
                <h1 className="contact-text-header">Contact</h1> 
                <p className="contact-text-paragraph">
                </p>
            </div>
             
            <div className="dividers-line"></div>
            
            {/* <Form /> */}
            <div className="contact-form-container">
               <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <label htmlFor="contact-form-label-name">Name</label>
                  <input className="contact-form-name" type="text" name="user_name" />
                  
                  <label htmlFor="contact-form-label-email">Email</label>
                  <input className="contact-form-email" type="email" name="user_email" />
                  
                  <label htmlFor="contact-form-label-message">Message</label>
                  <textarea className="contact-form-message" name="message" />
                  
                  <div className="contact-form-result">{result ? <Result /> : null}</div>
                  <input className="contact-form-submit" id="contact-form-send" type="submit" value="Send Message" />
               </form>
            </div>
            
        </div>
    )
}

export default Contact
