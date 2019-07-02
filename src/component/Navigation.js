import React from 'react';
import Logo from '../misc/images/logo.png';
import '../Custom.css';
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <div className="Navigation">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="logoName">
                <h1>Fooder</h1>
            </div>
            <div className="bar">
                <Link to="/"><p>Home</p></Link>
                <Link to="/Dashboard"><p>About</p></Link>
                <Link to="/Login"><p>Login</p></Link>
            </div>
        </div>


    );
}

export default navbar;