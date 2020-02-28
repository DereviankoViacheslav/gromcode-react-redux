import { fetchWeatherData } from './weather.gateway';

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export function weatherDataRecieved(weatherData) {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: { weatherData },
  };
}

export function getWeatherData() {
  return function (dispatch) {
    fetchWeatherData()
      .then((weatherData) => {
        dispatch(weatherDataRecieved(weatherData));
      });
  };
}