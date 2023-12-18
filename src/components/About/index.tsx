const About = () => {
  return (
    <div className="w-full bg-[#212121] px-2 lg:px-6 py-12" id="about">
      <div className="w-full lg:w-4/5 mx-auto h-[auto]">
        <div className="flex justify-between flex-col lg:flex-row ">
          <div className="w-full lg:w-6/12 h-[200px]">
            <h2 className="text-[#70ff00] text-2xl lg:text-3xl font-medium">
              aboutMe<span className="text-white text-md">( )</span>
            </h2>
            <div className="text-white mt-5 text-md lg:text-lg">
              <p>
                Im a Sai chandu looking for a opportunity as a front-end
                developer to prove myself as an intern & continue to be a full
                time employee.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-4/12 h-[200px]">
            <div className="w-full h-[80px] bg-[#4f4f4f] p-5 rounded-md shadow-xl">
              <div className="flex justify-between">
                <p className="text-white text-lg font-[BioRhyme]">
                  Front End developer{" "}
                </p>
                <i className="fa fa-code text-[#70ff00] text-xl"></i>
              </div>
              <a
                href="#projects"
                className="text-[#69d510] tracking-widest text-sm underline underline-offset-1 font-[BioRhyme]"
              >
                Projects
              </a>
            </div>
            <div className="w-full h-[80px] bg-[#4f4f4f] p-5 mt-3 rounded-md shadow-xl">
              <div className="flex justify-between ">
                <p className="text-white text-lg font-serif">Web developer </p>
                <i className="fa fa-globe text-[#70ff00] text-xl"></i>
              </div>
              <a
                href="https://www.linkedin.com/in/chandu-dsc-385086236/"
                target="__blank"
                className="text-[#69d510] text-sm tracking-widest underline underline-offset-1 font-[BioRhyme]"
              >
                Hire me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
