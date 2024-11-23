import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Location from './components/Location';
import Footer from './components/Footer';

import './css/landingpage.css';

import './js/script.jsx';


import './App.css'


function App() {

  return (
    <div className="website-container">
    <Home />
    <About />
    <Gallery />
    <Courses />
    <Location />
    <Footer />
  </div>
  )
}

export default App
