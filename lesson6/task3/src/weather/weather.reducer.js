import { WEATHER_DATA_RECEIVED } from "./weather.actions.js";

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED: {
      return action.payload.weatherData;
    }
    default:
      return state;
  }
};

export default weatherReducer;
