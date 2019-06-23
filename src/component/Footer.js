import React from 'react';
import Logo from '../misc/images/logo.png';
import '../Custom.css';


function footer() {
    return (
        <div className="footer">
                <div className="footerRight">
                    <img src={Logo}/>
                    <h1> Fooder</h1>
                </div>
                
        <div className="leftWrapper">
            <div className="fBox">
                <h3>Popular Deals</h3>
                <ul>
                    <li>Deal 1 by Burger Lab</li>
                    <li>Deal 2 by <font color='#ccc' size='4'>Broadway Pizza</font></li>
                    <li>Deal 3 by <font color='#ccc' size='4'>Macdonald's</font></li>
                    <li>Deal 4 by <font color='#ccc' size='4'>Hot n Spicy</font></li>
                    <li>Deal 5 by <font color='#ccc' size='4'>K.F.C</font></li>
                    
                </ul>
            </div>
            
            <div className="fBox">
                <h3>Popular Cuisines</h3>
                <ul>
                    <li>Drinks</li>
                    <li>Chicken Roast</li>
                    <li>Hot Dog</li>
                    <li>Prawns</li>
                    <li>Smoothies</li>
                    
                </ul>
            </div>
            <div className="fBox">
                <h3>Popular Categories</h3>
                <ul>
                    <li>Indian</li>
                    <li>Italian</li>
                    <li>Chinies</li>
                    <li>Pakistani</li>
                    <li>Seafood</li>
                    
                </ul>
            </div>
        </div>
        <div className="address">
           <p> Design & Developed by Muhammad Waqas</p>
        </div>
        </div>
           
        
    );
}

export default footer;