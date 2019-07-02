import React from 'react';
import '../Custom.css';
import Navbar from '../component/Navigation';
import Footer from '../component/Footer';
import Signup from '../component/ResSignUp';

class Login extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Navbar></Navbar>
        <ResSignUp {...this.props}></ResSignUp>
        <Footer></Footer>
      </div>
    );
  }
}

export default Login;
