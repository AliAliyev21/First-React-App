import React from 'react';
import homeIcon from './images/home.png'; 
import aboutIcon from './images/about.png'; 
import pagesIcon from './images/pages.png'; 
import portfolioIcon from './images/portfolio.png'; 
import fagIcon from './images/faq.png'; 
import contactIcon from './images/contact.png'; 

export default function Side() {
  return (
    <div className="side">
      <div className="side-header">
        <h1 className="title">Bootstrap<br />SideBar</h1>
      </div>
      <div className="side-content">
        <h1 className='one'>Dummy Heading</h1>
        <h2><img src={homeIcon} alt="home" className="home"/>Home</h2>
        <h2><img src={aboutIcon} alt="about" className="about"/>About</h2>
        <h2><img src={pagesIcon} alt="pages" className="pages"/>Pages</h2>
        <h2><img src={portfolioIcon} alt="portfolio" className="portfolio"/>Portfolio</h2>
        <h2><img src={fagIcon} alt="fag" className="fag"/>Fag</h2>
        <h2><img src={contactIcon} alt="contact" className="contact"/>Contact</h2>
      </div>
    </div>
  );
}
