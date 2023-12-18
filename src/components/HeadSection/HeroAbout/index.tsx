const HeroAbout = () => {
  return (
    <div className="flex lg:w-4/5 lg:mx-auto mt-2 lg:mt-12">
      <div className="w-4/5 mx-auto lg:mx-0 lg:w-6/12 flex flex-col justify-start mt-4 lg:mt-0 lg:justify-center items-start h-[200px] lg:h-[450px]">
        <h2 className="text-white text-sm lg:text-xl font-semibold ">
          Hello, i am
        </h2>
        <div className="mt-5">
          <p className="text-[#70ff00] lg:font-bold text-xl lg:text-4xl tracking-widest">
            {" "}
            <i className="fa fa-angle-left text-[#70ff00] text-xl lg:text-4xl"></i>
            {" Sai  "}{" "}
          </p>
          <p className="mt-4 text-[#70ff00] lg:font-bold text-xl lg:text-4xl tracking-widest">
            {"Chandu /"}
            <i className="fa fa-angle-right text-[#70ff00] text-xl lg:text-4xl"></i>{" "}
          </p>
        </div>

        <h2 className="text-sm lg:text-3xl text-white mt-2 lg:mt-8 lg:font-bold">
          Web Developer
        </h2>
        <div className="w-full flex flex-row lg:flex-row mt-2 lg:mt-8">
          <p className="text-[#4f4f4f] text-xs lg:text-sm mr-4">5+ PROJECTS</p>
          <p className="text-[#4f4f4f] text-xs lg:text-sm mr-4">
            SELF TAUGHT DEV
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroAbout;
