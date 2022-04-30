import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPaige from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPaige/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
