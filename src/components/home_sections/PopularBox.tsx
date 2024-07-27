import { FaDownload } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

interface Iprops {
  name: string;
  type: string;
  imgUrl: string;
}

const PopularBox = ({ name, type, imgUrl }: Iprops) => {
  return (
    <div className="px-4 py-8 bg-secondaryBg w-fit rounded-3xl space-y-4">
      <img className="rounded-3xl min-w-56" src={imgUrl} alt="poupler image" />
      <div className="text-primaryText">
        <div className="flex justify-between">
          <p className="font-bold">{name}</p>
          <p className="flex items-center gap-2">
            <AiFillStar className="text-yellow-500 text-lg" />
            4.8
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-thirdText">{type}</p>
          <p className="flex items-center gap-2">
            <FaDownload className="text-pink-500 text-lg" />
            2.3
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularBox;
