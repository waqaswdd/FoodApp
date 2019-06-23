import React from 'react';
import '../Custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Map from '../misc/images/map.png';
import Res from '../misc/images/res.png';
import Cash from '../misc/images/cod.png';
import Deli from '../misc/images/deli.png';


function HowWorks() {
    return (
        <div className="howIts">
            <div className="boxHow">
                <div className="IMG">
                    <img src={Map}/>
                </div>
                <p>Search by Address</p>
                <div className="desc">
                    <p>Find all restaurants available in your zone.</p>
                </div>
            </div>
            <div className="boxHow">
                <div className="IMG">
                    <img src={Res}/>
                </div>
                <p>Choose a Restuarant</p>
                <div className="desc">
                    <p>Find all restaurants available in your zone.</p>
                </div>
            </div>
            <div className="boxHow">
                <div className="IMG">
                    <img src={Cash}/>
                </div>
                <p>Pay by Card or Cash</p>
                <div className="desc">
                    <p>Find all restaurants available in your zone.</p>
                </div>
            </div>
            <div className="boxHow">
                <div className="IMG">
                    <img src={Deli}/>
                </div>
                <p>Delivery on Time</p>
                <div className="desc">
                    <p>Find all restaurants available in your zone.</p>
                </div>
            </div>
            <div className="delTime">
                <h2>Delivery in just </h2><p>30</p><h2> Minutes</h2>
            </div>

        </div>
           
        
    );
}

export default HowWorks;