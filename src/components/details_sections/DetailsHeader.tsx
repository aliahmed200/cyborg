import feature_l from "../../assets/feature-left.jpg";
import feature_r from "../../assets/feature-right.jpg";
interface Iprops {}

const DetailsHeader = ({}: Iprops) => {
  return (
    <div className="flex justify-between h-80 gap-10 mb-12">
      <img className="rounded-3xl" src={feature_l} alt="fortnite" />
      <img className="rounded-3xl w-full" src={feature_r} alt="fortnite" />
    </div>
  );
};

export default DetailsHeader;
