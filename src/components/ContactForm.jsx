import React from 'react';

const ContactForm = (props) => {
  return (
    <div>
      <form className="contact-form" method="POST" action="https://formspree.io/danielbgillen@gmail.com">
        <input type="email" name="email" placeholder="Your email"/>
        <textarea name="message" placeholder="Your Message"></textarea>
        <input className="submit-button" type="submit"/>
      </form>
    </div>
  )
}

export default ContactForm
