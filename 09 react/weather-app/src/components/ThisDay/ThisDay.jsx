import { ThisDayWrapper, Top, Bottom } from "./styles";

const ThisDay = () => {
  return (
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>100°</h2>
          <h3>Now</h3>
        </div>
        <img src="./images/weatherIcons/rain.svg" />
      </Top>
      <Bottom>
        <div>오후 11:11</div>
        <div>Seoul-KR</div>
      </Bottom>
    </ThisDayWrapper>
  );
};
export default ThisDay;
