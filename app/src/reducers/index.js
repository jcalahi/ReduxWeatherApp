import { combineReducers } from 'redux';

import WeatherReducer from './weather-reducer';

const ROOT_REDUCERS = combineReducers({
  weather: WeatherReducer
});

export default ROOT_REDUCERS;
