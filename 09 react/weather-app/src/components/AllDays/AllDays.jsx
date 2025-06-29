import Day from "./Day";
import { AllDaysWrapper } from "./styles";
import useWeatherForecast from "../../utils/getWeatherForecast";

const AllDays = () => {
  const { days } = useWeatherForecast("Seoul");

  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day key={day.date} day={day} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
