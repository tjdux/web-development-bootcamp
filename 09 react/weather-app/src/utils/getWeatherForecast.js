import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

const getWeatherForecast = (city = "Seoul") =>
  openWeather.getThreeHourForecastByCityName({
    cityName: city,
    units: "metric",
  });

const useWeatherForecast = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    queryKey: ["weather-forecast", city],
    queryFn: () => getWeatherForecast(city),
  });

  const days = (() => {
    if (!data?.list) return [];

    const grouped = data.list.reduce((acc, forecast) => {
      const date = forecast.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = { date, forecast: [] };
      }
      acc[date].forecast.push(forecast);
      return acc;
    }, {});

    return Object.values(grouped);
  })();

  console.log(days);

  return {
    ...rest,
    days,
    data,
  };
};

export default useWeatherForecast;
