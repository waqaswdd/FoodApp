import React from 'react';
import Logo from '../misc/images/logo.png';
import '../Custom.css';


function navbar() {
    return (
        <div className="Navigation">
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="logoName">
                    <h1>Fooder</h1>
                </div>
                <div className="bar">
                   <a href="/"><p>Home</p></a>
                   <a href="/Dashboard"><p>About</p></a>
                   <a href="/Login"><p>Login</p></a>
                </div>
        </div>
           
        
    );
}

export default navbar;