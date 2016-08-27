import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <SearchBar />
        </div>
      </Provider>
    );
  }
}

export default App;
