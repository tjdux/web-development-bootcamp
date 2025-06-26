import Header from "../components/Header/Header";
import { HomeWrapper, BackgroundGradient, MainContent } from "./styles";
import ThisDay from "../components/ThisDay/ThisDay";

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header />
        <MainContent>
          <ThisDay />
        </MainContent>
      </BackgroundGradient>
    </HomeWrapper>
  );
};

export default Home;
