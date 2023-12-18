const ImageAbout = () => {
  return (
    <div className="lg:w-6/12 h-auto lg:h-[450px] bg-[#131313] flex items-center justify-center ">
      <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-[#2D2D2D] rounded-full relative shadow-2xl">
        <div className="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] bg-[#4f4f4f] rounded-full absolute top-12"></div>
        <div className="w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] bg-[#222222] rounded-full absolute top-[-10px] right-0"></div>
        <div className="w-[6px] h-[6px] bg-[#bcbcbc] rounded-full absolute bottom-14 right-[-8px]"></div>
        <div className="w-[45px] h-[45px] lg:w-[75px] lg:h-[75px] bg-[#333333] p-2 rounded-full absolute top-20 left-[-25px]">
          <img src="img/react-logo.png" alt="react" className="text-lg" />
        </div>
        <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] bg-[#333333] p-1 rounded-full absolute bottom-2 right-[16px]">
          <img src="img/python-logo.png" alt="python" />
        </div>
        <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] bg-[#333333] p-2 rounded-full absolute top-14 right-[-8px]">
          <img
            src="img/js-logo.png"
            alt="javascript"
            className="rounded-full shadow-2xl "
          />
        </div>
        <img
          src="img/profile-animoji.png"
          className="w-full h-auto border-dashed shadow-lg shadow-grey-500/50"
          alt="profile"
        />
      </div>
    </div>
  );
};
export default ImageAbout;
