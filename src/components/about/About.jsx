import React from 'react'
import './about.css'
import ME from '../../assets/persona.png'
import {BsAward} from 'react-icons/bs'
import {ImBooks} from 'react-icons/im'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BsAward className='about__icon'/>
                        <h5>Experience</h5> 
                        <small>2+ year practicing</small>  
                    </article>
                    <article className='about__card'>
                        <ImBooks className='about__icon'/>
                        <h5>Studies</h5>  
                        <small>In second year of System Analyst</small> 
                    </article>
                    <article className='about__card'>
                        <AiOutlineFundProjectionScreen className='about__icon'/>
                        <h5>Projects</h5>  
                        <small>5+ Check on GitHub</small> 
                    </article>
                </div>
                <p>
                Hello! I am Growing programmer who is studying for a Systems Analyst degree, specializes in React language. I develop quickly in my tasks and I like to learn with new challenges.
                </p>
                <p>If you want to know me a little more, I invite you to connect through LinkedIn or by my email !</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk
                </a>
            </div>


        </div>
    </section>
  )
}

export default About