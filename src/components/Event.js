import React from 'react';
import './Calendar.css';
import markerGrey from '../images/markerGrey.png'
import moment from "moment";

export const Event = ({date, place, name}) => {
    return (
            <div className="cardEvent">
                <div className="flexContainer">
                    <div className="dateEvent">
                        <p>{moment(date).format('D')}</p>
                        <p>{moment(date).format('MMMM')}</p>
                    </div>
                    <div className="titleCard">
                        {name}
                    </div>
                    <a className="Place" href="https://www.google.fr/maps">
                        <img src={markerGrey}/>
                        {place}
                    </a>
                </div>
            </div>
    );
};