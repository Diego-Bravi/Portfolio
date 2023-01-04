import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfo0w1c', 'template_4xv9w2c', form.current, 'WAcwmHzKFSj_1-jXH')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='Contact__option-icon'/>
          <h4>Email</h4>
          <h5>diegobravi97@gmail.com</h5>
          <a href="mailto:diegobravi97@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='Contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href="https://api.whatsapp.com/send?phone543518606724" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact