import React from 'react'


function CardItem(props) {
    return (
        <>
            <li className="cards_item">
                <a className="cards__item__link" target="_blank" href={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}


export default CardItem
