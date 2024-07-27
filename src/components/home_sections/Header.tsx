import Button from "../../ui/Button";

const Header = () => {
  return (
    <div className="bg-banner bg-center bg-cover bg-no-repeat px-[70px] py-[70px] min-h-[400px] rounded-[28px] mb-14">
      <p className="text-primaryText mb-6 text-xl">Welcome To Cyborg</p>
      <h1 className="mb-8 text-[44px] text-primaryText leading-[1.10] uppercase font-bold max-w-[55%]">
        <span className="text-secondaryText">Browse</span> Our Popular Games
        Here
      </h1>
      <Button variant="primary">Browse Now</Button>
    </div>
  );
};

export default Header;
