import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Vectors from './pages/Vectors';
import './styles/navigation.scss';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li>
            <Link to="/vectors" className="nav__link">Vectors</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vectors" element={<Vectors />} />
      </Routes>
    </Router>
  );
};

export default App;
