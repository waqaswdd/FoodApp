import React, { Component } from 'react';
import '../Custom.css';
import {loginUser} from '../store/actions/AuthAction'

class loginForm extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,

            email: '',
            password: '',

            isCredentials: true,
        }
        this.userLogin=this.userLogin.bind(this);
    }

        async userLogin(){
            const {email, password} =this.state;

            try{
                const loginUserReturn = await loginUser({email, password});
                console.log('loginUserReturn', loginUserReturn)
                this.props.history.push('/Registration');
            } catch (err) {
                console.log(err);
            }
        }


    render() {
            const {isCredentials} = this.state;
        return (
            <div className="formWrapper">
                <div className="formInner">
                    <h1>Login to Account</h1>
                    <p>Enter Email</p>
                    <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Enter Email" />
                    <p>Enter Password</p>
                    <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Enter Password" />
                    <div className="loginBtn">
                        <p onClick={this.userLogin}>Login</p>
                    </div>
                    <p className="signup">Don't have an Account? <a href="/Registration"><font color='blue'>CREATE ACCOUNT</font></a></p>
                </div>
            </div>

        );
    }
}

export default loginForm;