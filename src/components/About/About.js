import './_about.scss';

import coffee1 from '../../resources/coffee-beans.svg';
import girl from '../../resources/girl.jpg';
import black from '../../resources/Vectorblack.svg';
import catalog from '../../resources/catalog-coffee.jpg';
import coffeeb from '../../resources/coffee-beans2.svg';
import aroma from '../../resources/aroma.jpg';

import { Link } from 'react-router-dom';

const About = () => {
   return (
      <body>
         <header className="header">
            <div className="container">
               <nav className="header__nav">
                  <img src={coffee1} alt="" className="header__nav-img" />
                  <Link to="/" className="header__nav-link">Coffee house</Link>
                  <Link to="/catalog" className="header__nav-link">Our coffee</Link>
                  <a href="#" className="header__nav-link">For your pleasure</a>
               </nav>
               <h1 className="header__title">Our Coffee</h1>
            </div>
         </header>

         <section className="about">
            <div className="container">
               <div className="about__main">
                  <img src={aroma} alt="" className="about__img" />
                  <div className="about__descr">
                     <div className="about__descr-title">About it</div>
                     <div className="about__descr-wrapper">
                        <img src={black} alt="" className="about__descr-coffee" />
                     </div>
                     <div className="about__descr-country">Country: Brasil</div>
                     <div className="about__descr-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                     <div className="about__descr-price">Price:  16.99$</div>
                  </div>
               </div>
            </div>
         </section>

         <footer className="search__footer">
            <div className="search__footer-panel">
               <img src={coffeeb} alt="" className="search__footer-img" />
               <a href="#" className="search__footer-item">Coffee house</a>
               <a href="#" className="search__footer-item">Our coffee</a>
               <a href="#" className="search__footer-item">For your pleasure</a>
            </div>
            <div className="search__footer-wrapper">
               <img src={black} alt="" className="search__footer-coffee" />
            </div>
         </footer>
      </body>
   )
}
export default About;
