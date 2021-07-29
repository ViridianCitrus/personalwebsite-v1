import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9/jpg"
                            text="Residential School Visualization - Front-end Developer - Hip Hack Array Hackathon 2021"
                            label='Repository'
                            path='https://github.com/ViridianCitrus/Residential-School-Visualization'
                        />
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
                </div>
            </div>
        </div>
    )
}

export default Cards
