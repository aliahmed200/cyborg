import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
interface Iprops {
  imageUrl: string;
  name: string;
  type: string;
}

const RelatedGameBox = ({ imageUrl, name, type }: Iprops) => {
  return (
    <div className="w-1/2 pr-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img className="rounded-3xl" src={imageUrl} alt="" />
        <div>
          <p className="text-primaryText font-bold">{name}</p>
          <p className="text-thirdText text-[16px]">{type}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="flex text-primaryText">
          4.8
          <AiFillStar className="text-yellow-500 text-lg" />
        </span>
        <span className="flex text-primaryText">
          2.3M
          <FaDownload className="text-pink-500 text-lg" />
        </span>
      </div>
    </div>
  );
};

export default RelatedGameBox;
