import React from 'react';
import '../Custom.css';

function Registration() {
    return (
        <div className="formWrapper">
            <h1>SignUp</h1>
            <p>Enter Name</p>
            <input type="text" placeholder="Enter Name"/>
            
            <p>Enter Email</p>
            <input type="text" placeholder="Enter Email"/>
            
            <p>Gender</p>
            <input type="radio" value="Male" width="50px"/><lable>Male</lable>
            <input type="radio" value="Female"/><lable>Female</lable>
            
            <p>Age</p>
            <input type="number" placeholder="Age"/>

            <p>Country</p>
            <input type="text" placeholder="Country Name"/>

            <p>City</p>
            <input type="text" placeholder="City"/>

            <p>Enter Password</p>
            <input type="password" placeholder="Enter Password"/>

            <p>Confirm Password</p>
            <input type="password" placeholder="Enter Confirm Password"/>
<br/>
            <input type="submit" value="Sign Up"/>
        </div>
        
    );
}

export default Registration;