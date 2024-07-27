import { LIVE_STREAM_SERVICE } from "../../data";
import Button from "../../ui/Button";
import LiveStreamServiceBox from "./LiveStreamServiceBox";

interface Iprops {}

const LiveStreamService = ({}: Iprops) => {
  return (
    <div className="mb-8">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">How To Start Your </span>
        Live Stream
      </p>
      <div className="flex items-center justify-center gap-6 mb-6">
        {LIVE_STREAM_SERVICE.map((item) => (
          <LiveStreamServiceBox
            key={item.imageUrl}
            imageUrl={item.imageUrl}
            instruction={item.instruction}
            details={item.explain}
          />
        ))}
      </div>
      <div className="text-center">
        <Button variant="primary">Go To Profile</Button>
      </div>
    </div>
  );
};

export default LiveStreamService;
