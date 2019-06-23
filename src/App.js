import React from 'react';
import './App.css';
import './Custom.css';
import MyRoutes from "./config/router"
// import Slider from './component/Slider';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faSearch, faTruck } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost, faSearch, faTruck)

class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <MyRoutes></MyRoutes>
      </div>
    );
  }
}

export default App;
