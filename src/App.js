import React, { Component } from 'react';

import InteractionsList from './components/InteractionsList/InteractionsList';
import data from './data/data1.json';

class App extends Component {
  render() {
    return (
        <InteractionsList interactions={data} />
    );
  }
}

export default App;
