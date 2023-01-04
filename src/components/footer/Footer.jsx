import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {CiLinkedin} from 'react-icons/ci'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> Diego Bravi Design</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="facebook.com"><BsFacebook/></a>
        <a href="instagram.com"><BsInstagram/></a>
        <a href="linkedin.com"><CiLinkedin/></a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy; Diego Bravi Form. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer