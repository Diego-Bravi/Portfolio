import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SISTEMA1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Clients System C#.NET</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>GitHub</a>
          <a href="http://.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
      </section>
  )
}

export default Portfolio