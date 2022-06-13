import React from "react";


import './App.css'

const tripCard = ({trip}) =>{
    return(
        <section className="trips">
            <ul className="trip-list">
            <li className="trip-card">
                <img src={trip.image} alt="trip image" />
                <div className="trip-card__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{trip.title}</h3>
                    <div className="trip-info__content">
                    <span className="trip-info__duration">
                        <strong>{trip.duration}</strong> days
                    </span>
                    <span className="trip-info__level">{trip.level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{trip.price}</strong>
                </div>
                </div>
                <a href={trip.id} className="button">
                Discover a trip
                </a>
            </li>
            </ul>
        </section>
    )
}

export default tripCard;