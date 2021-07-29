import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="/video/video-2.mp4" autoPlay loop muted /> */}
            <h1>Kevin Wang</h1>
            <p>_____</p>
            <p>Hello world</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    RESUME <i className='fas fa-download' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
