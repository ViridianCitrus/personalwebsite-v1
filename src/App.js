import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <Router>
        <HeroSection />
      </Router>

    </>
  );
}

export default App;
