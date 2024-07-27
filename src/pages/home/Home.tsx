import GamingLibrary from "../../components/home_sections/GamingLibrary";
import Header from "../../components/home_sections/Header";
import Popular from "../../components/home_sections/Popular";

interface Iprops {}

const Home = ({}: Iprops) => {
  return (
    <div className="bg-secondaryBg p-14 rounded-[28px] mb-8">
      <Header />
      <Popular />
      <GamingLibrary />
    </div>
  );
};

export default Home;
