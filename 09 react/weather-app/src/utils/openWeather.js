import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: import.meta.env.REACT_APP_API_KEY,
});

openWeather.openUnits("metric");

export default openWeather;
