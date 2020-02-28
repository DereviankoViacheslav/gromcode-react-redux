import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';

function Weather(props) {

  useEffect(() => {
    props.getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {props.weatherData && props.weatherData.map((city) => {
          return (
            <li key={city.id} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{`${city.temperature} F`}</span>
            </li>
          )
        })}
      </ul>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    weatherData: state.weather.weatherData,
  };
}

const mapDispatchToProps = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);