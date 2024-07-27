interface Iprops {
  imageUrl: string;
  instruction: string;
  details: string;
}

const LiveStreamServiceBox = ({ imageUrl, instruction, details }: Iprops) => {
  return (
    <div className="rounded-3xl border border-thirdText p-6">
      <img className="rounded-full mb-4" src={imageUrl} alt="" />
      <p className="text-primaryText text-xl font-bold mb-4">{instruction}</p>
      <p className="text-thirdText mb-4 leading-7">{details}</p>
    </div>
  );
};

export default LiveStreamServiceBox;
