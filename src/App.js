import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex space-x-4 justify-center"> 
            <li><Link to="/" className="btn">Home</Link></li>
            <li><Link to="/page1" className="btn">Page 1</Link></li>
            <li><Link to="/page2" className="btn">Page 2</Link></li>
            <li><Link to="/page3" className="btn">Page 3</Link></li>
            <li><Link to="/page4" className="btn">Page 4</Link></li>
            <li><Link to="/page5" className="btn">Page 5</Link></li>
            <li><Link to="/page6" className="btn">Page 6</Link></li>

          </ul>
        </nav>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
