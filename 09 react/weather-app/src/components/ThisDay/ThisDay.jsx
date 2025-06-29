import { ThisDayWrapper, Top, Bottom } from "./styles";
import CurrentTime from "./CurrentTime";
import useWeather from "../../utils/useWeather";
import getWeatherIcon from "../../utils/getWeatherIcon";

const ThisDay = () => {
  const { data, isLoading } = useWeather("Seoul");
  const weatherIconSrc = `./images/weatherIcons/${getWeatherIcon(
    data?.weather[0].main
  )}`;

  return (
    <ThisDayWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Top>
            <div>
              <h2>{Math.round(data?.main.temp)}°</h2>
              <h3>Now</h3>
            </div>
            <img src={weatherIconSrc} />
          </Top>
          <Bottom>
            <CurrentTime />
            <div>
              {data?.name}-{data?.sys.country}
            </div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};
export default ThisDay;
