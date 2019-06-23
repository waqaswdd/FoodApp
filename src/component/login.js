import React from 'react';
import '../Custom.css';

function loginForm() {
    return (
        <div className="formWrapper">
            <div className="formInner">
                <h1>Login to Account</h1>
                <p>Enter Email</p>
                <input type="text" placeholder="Enter Email"/>
                <p>Enter Password</p>
                <input type="password" placeholder="Enter Password"/>
                {/* <input type ="checkbox"/> */}
                <div className="loginBtn">
                    <p>Login</p>
                </div>
            </div>
        </div>
        
    );
}

export default loginForm;