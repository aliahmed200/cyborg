import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
interface Iprops {
  imageUrl: string;
  name: string;
}

const FeaturedGamesBox = ({ imageUrl, name }: Iprops) => {
  return (
    <div className="w-[215px]">
      <img className="w-full rounded-3xl mb-4" src={imageUrl} alt="" />
      <div className="flex justify-between items-center text-primaryText font-bold mb-1">
        <p>{name}</p>
        <p className="flex items-center gap-2">
          <AiFillStar className="text-yellow-500 text-lg" />
          4.8
        </p>
      </div>
      <div className="flex justify-between items-center text-thirdText">
        <p>249k Downloads</p>
        <p className="flex items-center gap-2">
          <FaDownload className="text-pink-500 text-lg" />
          2.3
        </p>
      </div>
    </div>
  );
};

export default FeaturedGamesBox;
