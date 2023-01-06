import React from 'react'
import CV from '../../assets/Bravi_Diego_Resume.pdf'
import CV2 from '../../assets/Bravi_Diego_Resumen.pdf'







const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download Eglish CV</a>
        <a href={CV2} download className='btn'>Download Spanish CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA