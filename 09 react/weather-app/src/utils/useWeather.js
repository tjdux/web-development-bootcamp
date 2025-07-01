import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

const getWeather = function (city) {
  const weather = openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metrics",
  });

  return weather;
};

const useWeather = function (city = "Seoul") {
  const { data, ...rest } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
  });

  return {
    ...rest,
    data,
  };
};

export default useWeather;
