import React from 'react';
import '../Custom.css';
import Navbar from '../component/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../component/Footer';
import UserPanel from '../component/userPanel';

library.add(faGhost, faSearch)

class Login extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Navbar></Navbar>

        <UserPanel></UserPanel>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default Login;
