import React from 'react';
import ContactForm from './ContactForm';

const Contact = (props) => {
  return(
    <div className="contact-container" ref={props.contact}>
      <div>
        <h1>Contact</h1>
        <p>Interested in working together?</p>
        <p>Send me an email!</p>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
