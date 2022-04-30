import coffee1 from '../../resources/coffee-beans.svg';
import girl from '../../resources/girl.jpg';
import black from '../../resources/Vectorblack.svg';
import catalog from '../../resources/catalog-coffee.jpg';
import coffeeb from '../../resources/coffee-beans2.svg';

import { Link } from 'react-router-dom';

// import '../MainPage/index.scss';
import './_catalog.scss';

const Catalog = () => {
   return (
      <body>
         <header className="header">
            <div className="container">
               <nav className="header__nav">
                  <img src={coffee1} alt="" className="header__nav-img" />
                  <Link to="/" className="header__nav-link">Coffee house</Link>
                  <a href="#" className="header__nav-link">Our coffee</a>
                  <Link to="/about" className="header__nav-link">For your pleasure</Link>
               </nav>
               <h1 className="header__title">Our Coffee</h1>
            </div>
         </header>

         <section className="catalog">
            <div className="container">
               <div className="catalog__main">
                  <img src={girl} alt="" className="catalog__img" />
                  <div className="catalog__descr">
                     <h2 className="catalog__descr-title">About our beans</h2>
                     <div className="catalog__descr-wrapper">
                        <img src={black} alt="" className="catalog__descr-bean" />
                        <p className="catalog__descr-text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </p>
                     </div>
                  </div>
               </div>
               <hr className="catalog__hr" />
            </div>
         </section>

         <section className="search">
            <div className="container">
               <div className="search__chapter">
                  <form action="#" className="search__panel">
                     <label htmlFor="first" className="search__panel-label">Lookiing for</label>
                     <input id="first" placeHolder="start typing here..." type="text" className="search__panel-input" />
                  </form>
                  <div className="search__panel-filter">
                     <span className="search__panel-span">Or filter</span>
                     <button className="search__panel-button">Brazil</button>
                     <button className="search__panel-button">Kenya</button>
                     <button className="search__panel-button">Columbia</button>
                  </div>
               </div>
               <div className="search__catalog">
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Brazil</div>
                     <div className="search__catalog-price">6.99$</div>
                  </div>
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Kenya</div>
                     <div className="search__catalog-price">6.99$</div>
                  </div>
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Columbia</div>
                     <div className="search__catalog-price">6.99$</div>
                  </div>
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Brazil</div>
                     <div className="search__catalog-price">6.99$</div>
                  </div>
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Brazil</div>
                     <div className="search__catalog-price">6.99$</div>
                  </div>
                  <div className="search__catalog-item">
                     <img src={catalog} alt="" className="search__catalog-img" />
                     <div className="search__catalog-title">AROMISTICO Coffee 1 kg</div>
                     <div className="search__catalog-name">Brazil</div>
                     <div className="search__catalog-price">6.99$</div>
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
   );
}

export default Catalog;