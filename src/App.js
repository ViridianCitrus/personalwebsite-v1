import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import { useEffect, } from 'react';
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards id="projects" />
        <Footer id="contact" />
      </Router>

    </>
  );
}

export default App;
