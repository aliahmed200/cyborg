import FeaturedGames from "../../components/browse_sections/FeaturedGames";
import LiveStream from "../../components/browse_sections/LiveStream";
import TopStreamer from "../../components/stream_sections/TopStreamer";

interface Iprops {}

const Stream = ({}: Iprops) => {
  return (
    <div className="bg-secondaryBg p-14 rounded-[28px] mb-8">
      <div className="flex gap-x-6">
        <FeaturedGames />
        <TopStreamer />
      </div>
      <LiveStream />
    </div>
  );
};

export default Stream;
