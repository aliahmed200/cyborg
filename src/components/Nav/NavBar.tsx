import { BiSearch } from "react-icons/bi";
import logo from "../../assets/logo.png";
import profileHeader from "../../assets/profile-header.jpg";
import { NAVBAR_LIST } from "../../data";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

interface Iprops {}

const NavBar = ({}: Iprops) => {
  return (
    <nav className="flex items-center justify-between py-7">
      <div className="flex items-center space-x-20">
        <img
          className="border-r border-gray-500 pr-20 cursor-pointer"
          src={logo}
          alt="website logo"
        />
        <div className="relative ">
          <input
            className="bg-secondaryBg rounded-full px-12 py-3 pl-10 placeholder-custom text-white max-w-56"
            type="text"
            placeholder="Type Something"
          />
          <BiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primaryBg"
            size={20}
          />
        </div>
      </div>
      <ul className="flex items-center space-x-10">
        {NAVBAR_LIST.map((item, index) => (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-secondaryText cursor-pointer hover:text-secondaryText duration-300"
                : "text-thirdText cursor-pointer hover:text-secondaryText duration-300"
            }
            key={index}
          >
            {item.pageName}
          </NavLink>
        ))}
        <NavLink
          to={"profile"}
          className={({ isActive }) =>
            isActive
              ? "px-[20px] pr-3 py-[10px] cursor-pointer bg-secondaryText rounded-full"
              : "px-[20px] pr-3 py-[10px] cursor-pointer hover:text-white"
          }
        >
          <Button className="flex tems-center gap-x-3" variant="secondary">
            Profile
            <img
              className="rounded-full"
              src={profileHeader}
              alt="profileHeader"
              width={25}
            />
          </Button>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
