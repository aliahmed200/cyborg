import { FEATURED_GAME_BOX } from "../../data";
import FeaturedGamesBox from "./FeaturedGamesBox";

interface Iprops {}

const FeaturedGames = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative mb-14 w-fit">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Featured </span> Games
      </p>
      <div className="flex  gap-6">
        {FEATURED_GAME_BOX.map((item) => (
          <FeaturedGamesBox imageUrl={item.imageUrl} name={item.gameName} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;
