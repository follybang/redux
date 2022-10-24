export const WEATHER_DATA_RECEIVED = "WEATHER/WEATHER_DATA_RECEIVED";

export const weatherDataReceived = (weatherData) => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData,
    },
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    fetch("https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities")
      .then((response) => response.json())
      .then((weatherData) => dispatch(weatherDataReceived(weatherData)));
  };
};
