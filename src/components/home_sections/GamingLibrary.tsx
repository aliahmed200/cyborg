import { GAMING_LIBRARY_DATA } from "../../data";
import Button from "../../ui/Button";

interface Iprops {}

const GamingLibrary = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative ">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Your Gaming</span> Library
      </p>
      {GAMING_LIBRARY_DATA.map((item, index) => (
        <>
          <div key={index} className="flex items-center justify-between mb-4">
            <img className="rounded-3xl" src={item.imgUrl} alt="" />
            <div className="flex flex-col gap-y-1">
              <span className="text-primaryText font-bold">
                {item.gameName}
              </span>
              <span className="text-thirdText">{item.gameType}</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-primaryText font-bold">Date Added</span>
              <span className="text-thirdText">{item.dataAdded}</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-primaryText font-bold"> Hours Played</span>
              <span className="text-thirdText">{item.hoursPlayed}</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-primaryText font-bold">Currently</span>
              <span className="text-thirdText">
                {item.isDownload ? " Downloaded" : "Not Downloaded"}
              </span>
            </div>
            <Button
              className={`${
                item.isDownload
                  ? "cursor-not-allowed border-none hover:bg-transparent text-gray-600"
                  : ""
              }`}
              variant="secondary"
            >
              {item.isDownload ? "Downloaded" : "download"}
            </Button>
          </div>
          <hr className="mb-4 border border-thirdText opacity-10" />
        </>
      ))}
      <Button
        className="absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-50%]"
        variant="primary"
      >
        View Your Library
      </Button>
    </div>
  );
};

export default GamingLibrary;
