import styled from "styled-components";
import { Container } from "../Container.styles";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #677eea -0%, #764ba2 100%);
`;

export const MainContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  align-items: start;
`;

// 메인 왼쪽 카드
export const WeatherSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

// 메인 오른쪽 카드
export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

// 아래 부분
export const ForecastSection = styled(Container)`
  margin-bottom: 40px;
`;
