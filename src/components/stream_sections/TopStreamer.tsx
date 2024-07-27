import { AiFillCheckCircle } from "react-icons/ai";
import { TOP_STREAMER } from "../../data";
import Button from "../../ui/Button";

interface Iprops {}

const TopStreamer = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative mb-14 w-full">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Top </span> Streamers
      </p>
      {TOP_STREAMER.map((item) => (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2">
                <p className="text-primaryText font-semibold ">
                  {item.streamrNumber}
                </p>
                <img className="rounded-3xl" src={item.streamrImage} alt="" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-secondaryText">
                  <AiFillCheckCircle className="bg-white rounded-full text-xl" />
                  <p>{item.streamerName}</p>
                </div>
              </div>
              <Button className="py-2 px-3" variant="primary">
                Follow
              </Button>
            </div>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
        </>
      ))}
      <p className="text-secondaryText font-bold text-center">View All Games</p>
    </div>
  );
};

export default TopStreamer;
