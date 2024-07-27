import FeaturedGames from "../../components/browse_sections/FeaturedGames";
import LiveStream from "../../components/browse_sections/LiveStream";
import LiveStreamService from "../../components/browse_sections/LiveStreamService";
import TopDownload from "../../components/browse_sections/TopDownload";

interface Iprops {}

const Browse = ({}: Iprops) => {
  return (
    <div className="bg-secondaryBg p-14 rounded-[28px] mb-8">
      <div className="flex gap-x-6">
        <FeaturedGames />
        <TopDownload />
      </div>
      <LiveStreamService />
      <LiveStream />
    </div>
  );
};

export default Browse;
