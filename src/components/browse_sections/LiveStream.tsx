import { LIVE_STREAM } from "../../data";
import LiveStreamBox from "./LiveStreamBox";

interface Iprops {}

const LiveStream = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative mb-14 w-fit">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Most Popular</span> Live
        Stream
      </p>
      <div className="flex flex-wrap justify-between gap-6">
        {LIVE_STREAM.map((item) => (
          <LiveStreamBox
            key={item.streamerName}
            description={item.streamCaption}
            imageUrl={item.imageUrl}
            streamerImage={item.streamerPicture}
            streamerName={item.streamerName}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveStream;
