import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/diego-bravi/" target=""><AiFillLinkedin/></a>
        <a href="https://github.com/HotSh0oT" target=""><FiGithub/></a>
        
    </div>
  )
}

export default headerSocials