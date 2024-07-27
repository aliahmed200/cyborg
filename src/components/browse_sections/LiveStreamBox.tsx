import { AiFillCheckCircle } from "react-icons/ai";


interface Iprops {
  imageUrl: string;
  streamerImage: string;
  streamerName: string;
  description: string;
}

const LiveStreamBox = ({
  imageUrl,
  description,
  streamerImage,
  streamerName,
}: Iprops) => {
  return (
    <div className="w-64">
      <img className="rounded-3xl mb-6 w-full" src={imageUrl} alt="" />
      <div className="flex items-start gap-4">
        <img className="rounded-full" src={streamerImage} alt="" />
        <div>
          <div className="flex items-center gap-2 text-secondaryText">
            <AiFillCheckCircle className="bg-white rounded-full text-xl" />
            <p>{streamerName}</p>
          </div>
          <p className="text-primaryText font-bold text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamBox;
