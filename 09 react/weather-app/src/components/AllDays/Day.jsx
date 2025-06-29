import { DayWrapper, TopPart, BottomPart } from "./styles";
import getWeatherIcon from "../../utils/getWeatherIcon";

const Day = ({ day }) => {
  const { date, forecast } = day;
  console.log(date, forecast);
  const maxTemp = Math.max(...forecast.map((x) => Math.round(x.main.temp_max)));
  const minTemp = Math.min(...forecast.map((x) => Math.round(x.main.temp_max)));
  const dayName = `${new Date(date)}`.split(" ")[0];
  const weatherIconSrc = `./images/weatherIcons/${getWeatherIcon(
    forecast[0].weather[0].main
  )}`;

  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayName}</h2>
          <h3>
            {date.split("-")[1]}.{date.split("-")[2]}
          </h3>
        </div>
        <img src={weatherIconSrc} alt="" />
      </TopPart>
      <BottomPart>
        <h2>{maxTemp}°</h2>
        <h3>{minTemp}°</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
