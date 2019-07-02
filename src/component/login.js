import React, { Component } from 'react';
import '../Custom.css';
import {loginUser} from '../store/actions/AuthAction'
import { Link } from 'react-router-dom'

class loginForm extends Component {
    constructor(props) {
        super(props)
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
                this.props.history.push('./Dashboard');
            } catch (err) {
                console.log(err);
            }
        }


    render() {
            const {isCredentials} = this.state;
            console.log('this.props',this.props)

        return (
            <div className="formWrapper">
                <div className="formInner">
                    <form>
                    <h1>Login to Account</h1>
                    <p>Enter Email</p>
                    <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Enter Email" required/>
                    <span>Enter Valid Email Address</span>
                    <p>Enter Password</p>
                    <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Enter Password" required/>
                    <span>Password or Email incorrect</span>
                    <div className="loginBtn">
                        <p onClick={this.userLogin}>Login</p>
                        {/* <input type="submit" onSubmit={this.userLogin}/> */}
                    </div>
                    <p className="signup">Don't have an Account? <Link to="/Registration"><font color='blue'>CREATE ACCOUNT</font></Link></p>
                    </form>
                </div>
            </div>

        );
    }
}

export default loginForm;