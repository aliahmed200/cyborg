import { IoLogoGameControllerA } from "react-icons/io";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import details1 from "../../assets/details-01.jpg";
import details2 from "../../assets/details-02.jpg";
import details3 from "../../assets/details-03.jpg";
import Button from "../../ui/Button";

interface Iprops {}

const GameDetails = ({}: Iprops) => {
  return (
    <div className="mb-12">
      <p className="text-primaryText text-5xl font-bold text-center uppercase mb-12">
        Fortnite Details
      </p>
      <div className="bg-primaryBg p-10 rounded-3xl">
        <div className="flex gap-4 rounded-3xl relative mb-12">
          <div className="flex-1 bg-secondaryBg rounded-3xl p-8">
            <span className="flex justify-between items-center text-primaryText font-bold">
              Fortnite
              <span className="flex">
                4.8
                <AiFillStar className="text-yellow-500 text-lg" />
              </span>
            </span>
            <span className="flex justify-between items-center text-thirdText">
              Sandbox{" "}
              <span className="flex text-primaryText">
                2.3M
                <FaDownload className="text-pink-500 text-lg" />
              </span>
            </span>
          </div>
          <div className="flex-1 flex justify-between items-center text-white  bg-secondaryBg rounded-3xl p-8">
            <span className="flex flex-col items-center gap-y-2">
              <AiFillStar className="text-yellow-500 text-lg" />
              <span>4.8 </span>
            </span>
            <span className="flex flex-col items-center gap-y-2">
              <FaDownload className="text-pink-500 text-lg" />
              <span>2.3M</span>
            </span>
            <span className="flex flex-col items-center gap-y-2">
              <AiFillDatabase className="text-pink-500 text-lg" />
              <span>36GB</span>
            </span>
            <span className="flex flex-col items-center gap-y-2">
              <IoLogoGameControllerA className="text-pink-500 text-xl" />
              <span>Action</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-12">
          <img className="flex-1 rounded-3xl" src={details1} alt="" />
          <img className="flex-1 rounded-3xl" src={details2} alt="" />
          <img className="flex-1 rounded-3xl" src={details3} alt="" />
        </div>
        <p className="text-thirdText leading-8 text-[16px] mb-12">
          Cyborg Gaming is free HTML CSS website template provided by
          TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
          <span className="text-primaryText">
            small contribution via PayPal
          </span>{" "}
          to info [at] templatemo.com and thank you for supporting. If you want
          to get the PSD source files, please contact us. Lorem ipsum dolor sit
          consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored
          tempor.
        </p>
        <Button variant="secondary" width="w-full">
          Download Fortnite Now!
        </Button>
      </div>
    </div>
  );
};

export default GameDetails;
