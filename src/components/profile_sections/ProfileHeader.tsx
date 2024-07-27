import profile from "../../assets/profile.jpg";
import Button from "../../ui/Button";
import GamingLibrary from "../home_sections/GamingLibrary";
interface Iprops {}

const ProfileHeader = ({}: Iprops) => {
  return (
    <div className="">
      <div className="flex items-center bg-primaryBg p-8 justify-between gap-x-4 mb-8 rounded-3xl relative">
        <img className="rounded-3xl flex-1" src={profile} alt="profile image" />
        <div className="flex-1">
          <Button className="py-2 px-3 mb-2" variant="primary">
            offline
          </Button>
          <p className="text-primaryText font-bold text-2xl mb-4">
            Alan Smithee
          </p>
          <p className="text-thirdText text-[16px] mb-4">
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>
          <Button variant="secondary">Start Live Stream</Button>
        </div>
        <div className="flex-1 p-8 rounded-3xl bg-secondaryBg">
          <div className="flex justify-between pb-2">
            <span className="text-thirdText text-[16px]">Games Downloaded</span>
            <span className="text-secondaryText">3</span>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
          <div className="flex justify-between pb-2">
            <span className="text-thirdText text-[16px]">Friends Online</span>
            <span className="text-secondaryText">16</span>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
          <div className="flex justify-between pb-2">
            <span className="text-thirdText text-[16px]">Live Streams</span>
            <span className="text-secondaryText">None</span>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
          <div className="flex justify-between pb-2">
            <span className="text-thirdText text-[16px]">Clips29</span>
            <span className="text-secondaryText">29</span>
          </div>
          <hr className="mb-6 border border-thirdText opacity-10" />
        </div>
      </div>
      <hr className="mb-6 border border-thirdText opacity-10" />

      <div>
        <GamingLibrary />
      </div>
    </div>
  );
};

export default ProfileHeader;
