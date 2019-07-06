import React from 'react';
import '../Custom.css';
import Navbar from '../component/Navigation';
import Footer from '../component/Footer';
import ResRegister from '../component/ResSignUp';

class Login extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Navbar></Navbar>
        <ResRegister  {...this.props}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default Login;
