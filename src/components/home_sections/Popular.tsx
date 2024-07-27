import { MOST_POPULAR } from "../../data";
import Button from "../../ui/Button";
import PopularBox from "./PopularBox";

interface Iprops {}

const Popular = ({}: Iprops) => {
  return (
    <div className="bg-primaryBg p-8 rounded-3xl relative mb-14">
      <p className="mb-8 text-secondaryText text-[34px] font-bold">
        <span className="text-primaryText underline">Most Popular</span> Right
        Now
      </p>
      <div className="flex flex-wrap justify-between gap-y-8 mb-6">
        {MOST_POPULAR.map((item) => (
          <PopularBox
            key={item.name}
            name={item.name}
            type={item.type}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <Button
        className="absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-50%]"
        variant="primary"
      >
        Discover Popular
      </Button>
    </div>
  );
};

export default Popular;
