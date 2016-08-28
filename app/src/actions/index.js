import axios from 'axios';
import { API_URL, API_KEY, FETCH_WEATHER } from '../constants';

const ROOT_URL = API_URL + API_KEY;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, ph&units=metric`;

  return {
    type: FETCH_WEATHER,
    payload: axios.get(url)
  };
}
