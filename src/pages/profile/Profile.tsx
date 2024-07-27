import ProfileHeader from "../../components/profile_sections/ProfileHeader";

interface Iprops {}

const Profile = ({}: Iprops) => {
  return (
    <div className="bg-secondaryBg p-14 rounded-[28px] mb-8">
      <ProfileHeader />
    </div>
  );
};

export default Profile;
