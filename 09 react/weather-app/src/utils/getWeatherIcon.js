const getWeatherIcon = function (icon) {
  switch (icon) {
    case "Clear":
      return "clear-sky-svg";
    case "Clouds":
      return "few-clouds.svg";
    case "Atmosphere":
      return "mist.svg";
    case "Rain":
      return "rain.svg";
    case "Snow":
      return "snow.svg";
    case "ThunderStorm":
      return "thunderstorm.svg";
  }
};

export default getWeatherIcon;
