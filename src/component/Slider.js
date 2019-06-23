import React from 'react';
import '../Custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function slider() {
    return (
        <div className="slideImage">
            <div className="welcomeText">
                <h1>Welcome to Fooder</h1>
                <div className="searchBar">
                    <input type="text" placeholder="Search by Food or Restuarant...."/>
                    <div className="button">Search <FontAwesomeIcon className="Sicon" icon="search" /> </div>
                </div>
            </div>
        <div className="userCount">
            <div className="countBox">
                <h2>180+ Restuarants</h2>
            </div>
            <div className="countBox">
                <h2>5000+ Served</h2>
            </div>
            <div className="countBox">
                <h2>2500+ Users</h2>
            </div>
        </div>
        </div>
           
        
    );
}

export default slider;