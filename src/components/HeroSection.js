import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CardItem from './CardItem'
import { Grid } from '@material-ui/core';
import './Cards.css';


function HeroSection() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])


    const goToProjects = () => {
        setClick(false);
        const elem = document.getElementById("projects");
        elem.scrollIntoView({ behavior: "smooth" })

    }


    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Kevin
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={goToProjects}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
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
            <div className='cards' id="projects">
                <h1>Projects</h1>
                <Grid className="cards__container">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9/jpg"
                            text="Residential School Visualization - Front-end Developer - Hip Hack Array Hackathon 2021"
                            label='Repository'
                            path='https://github.com/ViridianCitrus/Residential-School-Visualization'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-2/jpg"
                            text="Sheemo Bot - Lead Developer - Waterloo Engineering Hackathon 2021"
                            label='Repository'
                            path='https://github.com/alyzenjeraj/Daily-Info-Update'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9/jpg"
                            text="Growth - Design Lead - JunioTech Unity Hackathon 2020"
                            label='Repository'
                            path='https://github.com/joeywangzr/Potato-Time'
                        />
                    </ul>
                </Grid>
            </div>
        </>
    )
}

export default HeroSection
