import React, { Component } from 'react';

import './App.css';
import InteractionsList from './components/InteractionsList/InteractionsList';
import data from './data/data1.json';

class App extends Component {
  render() {
    return (
      <div className="interactions-list-container">
        <InteractionsList interactions={data} />
      </div>
    );
  }
}

export default App;
