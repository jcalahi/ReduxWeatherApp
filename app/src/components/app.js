import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
        <div>
          <SearchBar />
        </div>
    );
  }
}

export default App;
