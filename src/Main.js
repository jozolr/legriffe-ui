import React from 'react';
import Header from './images/header.jpg';
import Accueil from './components/Accueil';
import Map from './components/Map';
import Calendar from './components/Calendar';
import './Main.css';

export const Main = () =>  {
        return (
            <div className="Main">
                <img src={Header} className="Header" alt="Header"/>
                <div className="body">
                    <Accueil/>
                    <Map/>
                    <Calendar/>
                </div>
            </div>
        );
};

export default Main;
