import React from 'react';
import "./Portfolio.css";
import taskTracker from '../../assets/taskTracker.png';
import Ecom from '../../assets/Ecom.png';
import HopeHacks from '../../assets/HopeHacks.png';
import Code4Just from '../../assets/Code4Justice.png';
import Gateway from '../../assets/Gateway.png';
import Wiki from '../../assets/Wiki.png';


const Portfolio = () => {
  return (
    <section className="portfoilio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Recent Projects</span>

        <div className="portfolio__container container grid">
            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>
            <img src={taskTracker} alt="" /> 

            <h3>Task Tracker</h3>
            <a href="https://github.com/" className="btn" target='_blank' rel="noopener noreferrer" >Github </a> 
            <a href="https://peppy-beijinho-2b41f6.netlify.app/" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>

            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>
            <img src={Ecom} alt="" /> 

            <h3>Ecommerce </h3>
            <a href="https://github.com/" className="btn" target='_blank' rel="noopener noreferrer" >Github </a>
            <a href="https://react-ecom2.herokuapp.com/" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>

            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>

            <img src={HopeHacks} alt="" /> 

            <h3>HopeHacks</h3>
            <a href="https://github.com/" className="btn" target='_blank' rel="noopener noreferrer" >Github</a>
            <a href="https://covid-hopehack.herokuapp.com/" className="btn btn-primary" target='_blank' rel="noopener noreferrer" >Live Demo</a>
            </article>

            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>
            <img src={Code4Just} alt="" />
            <h3>Code 4 Justice</h3>
            <a href="https://github.com/Justokes1/code4Justice" className="btn" target='_blank' rel="noopener noreferrer" >Github</a>
            <a href="https://calm-madeleine-bf60b3.netlify.app/index.html" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>

            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>
            <img src={Gateway} alt="" />
            <h3>Gateway Design</h3>
            <a href="https://github.com/juanhdzx/Gateway-Project-Revision.git" className="btn" target='_blank' rel="noopener noreferrer" >Github</a>
            <a href="https://resilient-alfajores-659207.netlify.app/index.html" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>

            <article className="portfolio__item">
            <div className="portfolio__item-image"></div>
            <img src={Wiki} alt="" />
            <h3>Wikipedia - Redesign</h3>
            <a href="https://github.com/juanhdzx/Redesign_G6.git" className="btn" target='_blank' rel="noopener noreferrer" >Github</a>
            <a href="https://main.d2wzkwm3nb10ll.amplifyapp.com/" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>
        </div>
    </section>
  )
}

export default Portfolio