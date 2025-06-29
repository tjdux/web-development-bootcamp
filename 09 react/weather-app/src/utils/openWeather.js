import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: import.meta.env.VITE_API_KEY,
});

openWeather.setUnits("metric");

export default openWeather;
