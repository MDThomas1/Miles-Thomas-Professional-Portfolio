import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Resume' element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
