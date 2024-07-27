import DetailsHeader from "../../components/details_sections/DetailsHeader";
import GameDetails from "../../components/details_sections/GameDetails";
import RelatedGame from "../../components/details_sections/RelatedGame";

interface Iprops {}

const Details = ({}: Iprops) => {
  return (
    <div className="bg-secondaryBg p-14 rounded-[28px] mb-8">
      <DetailsHeader />
      <GameDetails />
      <RelatedGame />
    </div>
  );
};

export default Details;
