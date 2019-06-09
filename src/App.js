import React from 'react';
import './App.css';
import './Custom.css';
import Registration from './component/form';

class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Registration></Registration>
      </div>
    );
  }
}

export default App;
