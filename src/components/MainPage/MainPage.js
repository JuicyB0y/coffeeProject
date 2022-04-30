import coffee1 from '../../resources/coffee-beans.svg';
import coffee2 from '../../resources/Vectorcoffee-main.svg';
import black from '../../resources/Vectorblack.svg';
import catalog1 from '../../resources/catalog-1.jpg';
import catalog2 from '../../resources/catalog-2.jpg';
import coffeeb from '../../resources/coffee-beans2.svg';

import { NavLink, Link } from 'react-router-dom';

import './index.scss';

const MainPaige = () => {
  return (
    <body>
      <header className="mainheader">
        <div className="container">
          <div className="mainheader__inner">
            <img src={coffee1} alt="" className="mainheader__logo" />
            <nav className="mainheader__nav">
              <a href="#" className="mainheader__nav-link">Coffee house</a>
              <NavLink end activeStyle={({ isActive}) => ({'color' : isActive ? 'red' : 'inherit'})} to="/catalog" className="mainheader__nav-link">Our coffee</NavLink>
              <Link to="/about" className="mainheader__nav-link">For your pleasure</Link>
            </nav>
          </div>
          <h1 className="mainheader__title">Everything You Love About Coffee</h1>
          <div className="mainheader__wrapper">
            <img src={coffee2} alt="" className="mainheader__img" />
          </div>
          <h2 className="mainheader__subtitle-1">We makes every day full of energy and taste</h2>
          <h2 className="mainheader__subtitle-2">Want to try our beans?</h2>
          <a href="" className="btn header__more">More</a>
        </div>
      </header>

      <section className="mainabout">
        <div className="container">
          <h3 className="mainabout__title">About Us</h3>
          <div className="mainabout__wrapper">
            <img src={black} alt="" className="mainabout__img" />
          </div>
          <p className="mainabout__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.<br/><br/>

          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
          </p>
        </div>
      </section>

      <section className="best">
        <div className="container">
          <h3 className="best__title">Our best</h3>
          <div className="best__wrapper">
              <div className="best__item">
                <img src={catalog1} alt="" className="best__item-img" />
                <div className="best__item-descr">Solimo Coffee Beans 2 kg</div>
                <div className="best__item-price">10.73$</div>
              </div>
              <div className="best__item">
                <img src={catalog2} alt="" className="best__item-img" />
                <div className="best__item-descr">Presto Coffee Beans 1 kg</div>
                <div className="best__item-price">15.99$</div>
              </div>
              <div className="best__item">
                <img src={catalog1} alt="" className="best__item-img" />
                <div className="best__item-descr">AROMISTICO Coffee 1 kg</div>
                <div className="best__item-price">6.99$</div>
              </div>
            </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__link">
            <img src={coffeeb} alt="" className="footer__img" />
            <a href="#" className="footer__item">Coffee house</a>
            <a href="#" className="footer__item">Our coffee</a>
            <a href="#" className="footer__item">For your pleasure</a>
          </div>
          <div className="footer__wrapper">
              <img src={black} alt="" className="footer__coffee" />
            </div>
        </div>
      </footer>
    </body>
  );
}
export default MainPaige;
