import Header from "components/organisms/Header";
import { HomeWrapper } from "./style";
import GridBox from "components/organisms/GridBox";

const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <GridBox />
      </HomeWrapper>
    </>
  );
};
export default Home;
