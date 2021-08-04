import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import './Navbar.css';
import './Cards.css';
import './Button.css';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import { Grid } from '@material-ui/core';
import Footer from './Footer';
import growthImg from '../img/Growth.JPG';
import engHackImg from '../img/EngHack.JPG';
import HHAImg from '../img/HHA.png';

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


    const goToAbout = () => {
        setClick(false);
        const elem = document.getElementById("about");
        elem.scrollIntoView({ behavior: "smooth" });

    }

    const goToProjects = () => {
        setClick(false);
        const elem = document.getElementById("projects");
        elem.scrollIntoView({ behavior: "smooth" });

    }

    const goToContact = () => {
        setClick(false);
        const elem = document.getElementById("contact");
        console.log(elem)
        elem.scrollIntoView({ behavior: "smooth" });
    }


    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" onClick={goToAbout}>
                        Kevin
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={goToAbout}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={goToProjects}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links-mobile' onClick={goToContact}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button &&
                        <button className="btn btn--outline btn--medium" onClick={goToContact}>
                            Contact Me
                        </button>}
                </div>
            </nav>
            <div className="hero-container" id="about">
                <h1>Kevin Wang</h1>
                <p></p>
                <div className="hero-btns">

                    <button className='btns btn--primary btn--large'>
                        <Link className='nav-link' to="/files/Resume.pdf" target="_blank" download>RESUME  <i className='fas fa-download' /></Link>
                    </button>
                </div>
            </div>
            <div className='cards' id="projects">
                <h1>Projects</h1>
                <Grid className="cards__container">
                    <ul className="cards__items">
                        <CardItem
                            src={HHAImg}
                            text="Residential School Visualization - Front-end Developer - Hip Hack Array Hackathon 2021"
                            label='Repository'
                            path='https://github.com/ViridianCitrus/Residential-School-Visualization'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={engHackImg}
                            text="Sheemo Bot - Lead Developer - Waterloo Engineering Hackathon 2021"
                            label='Repository'
                            path='https://github.com/alyzenjeraj/Daily-Info-Update'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={growthImg}
                            text={
                                <>
                                    <p>Growth - Design Lead - JunioTech Unity Hackathon 2020</p>
                                    <p>Audience's Choice & 2nd Place Overall</p>
                                </>
                            }
                            label='Repository'
                            path='https://github.com/joeywangzr/Potato-Time'
                        />

                    </ul>
                </Grid>
            </div>
            <div id="contact" >
                <Footer />
            </div>
        </>
    )
}

export default HeroSection
