import React from 'react';
import '../Custom.css';
import Navbar from '../component/Navigation';
import Slider from '../component/Slider';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faSearch } from '@fortawesome/free-solid-svg-icons'
import HowWorks from '../component/textContainer';
import Resturant from'../component/Resturants';
import Footer from '../component/Footer';

library.add(faGhost, faSearch)

class Home extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Navbar/>
        <Slider></Slider>
        <HowWorks></HowWorks>
        <Resturant></Resturant>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
