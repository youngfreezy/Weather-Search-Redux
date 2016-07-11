import axios from 'axios';
const API_KEY='bbf7e72ff9a84399da3ee3205ad911c9';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
//redux promise stops the action if payload is promise
//when request finishes, dispatches a new action of the same type
// but with a payload of the resolved request
// it un wraps the promise for us. makes it so we don't have to
//deal with promises in reducers in a switch statement
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}