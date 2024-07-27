import { AiFillStar } from "react-icons/ai";
import { GAMING_LIBRARY_DATA } from "../../data";
import { FaDownload } from "react-icons/fa";

interface Iprops {}

const TopDownload = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative mb-14 w-full">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Top </span> Downloaded
      </p>
      {GAMING_LIBRARY_DATA.map((item) => (
        <>
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-end gap-3">
              <img className="rounded-3xl" src={item.imgUrl} alt="" />
              <div>
                <p className="text-primaryText font-semibold">
                  {item.gameName}
                </p>
                <p className="text-thirdText">{item.gameType}</p>
                <div className="flex items-end text-primaryText gap-2">
                  <p className="flex items-center gap-2">
                    <AiFillStar className="text-yellow-500 text-lg" />
                    4.8
                  </p>
                  <p className="flex items-center gap-2">
                    <FaDownload className="text-pink-500 text-lg" />
                    2.3
                  </p>
                </div>
              </div>
            </div>

            <span className="p-4 rounded-full bg-secondaryBg">
              <FaDownload className="text-pink-500 text-lg " />
            </span>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
        </>
      ))}
      <p className="text-secondaryText font-bold text-center">View All Games</p>
    </div>
  );
};

export default TopDownload;
