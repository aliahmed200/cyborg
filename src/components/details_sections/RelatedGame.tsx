import { GAMING_LIBRARY_DATA } from "../../data";
import RelatedGameBox from "./RelatedGameBox";

interface Iprops {}

const renderRelatedGameBoxes = () => {
  return GAMING_LIBRARY_DATA.map((item, index) => (
    <RelatedGameBox
      key={index}
      imageUrl={item.imgUrl}
      name={item.gameName}
      type={item.gameType}
    />
  ));
};

const RelatedGame = ({}: Iprops) => {
  return (
    <div className="px-4 py-8 bg-primaryBg w-fit rounded-3xl space-y-4">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Other Related</span> Games
      </p>
      <div className="flex flex-wrap gap-y-6">
        {renderRelatedGameBoxes()}
        {renderRelatedGameBoxes()}
      </div>
    </div>
  );
};

export default RelatedGame;
