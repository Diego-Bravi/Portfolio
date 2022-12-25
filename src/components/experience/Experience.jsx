import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>Css</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>C#.NET</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            
            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>NodeJS</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>Microsoft Access</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>                    
                    </article>
                    <article className='experience__details'>
                        <BsCheck2Circle className = 'experience__details-info'/>
                        <div>
                        <h4>PostMan</h4>
                        <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                  
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience