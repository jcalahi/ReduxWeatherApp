import React, { Component } from 'react';
import ReduxPromise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleWare(reducers)}>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </Provider>
    );
  }
}

export default App;
