import React from 'react';
import '../Custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LalQila from '../misc/images/deal-1.jpg';



function resDiv() {
    return (
        
                <div className="resBox">
                    <img src={LalQila}/>
                    <div className="resCaption">
                        <div className="descreption">
                            <p>Lal Qila</p>
                        </div>
                        <div className="visitBtn">
                            <p>Visit</p>
                        </div>
                    </div>
                </div>
    );
}

export default resDiv;