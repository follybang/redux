import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWeatherData } from "./weather.actions.js";

const Weather = ({ weatherData, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((city) => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{`${city.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherData: state,
  };
};

const mapDispatch = {
  fetchWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
