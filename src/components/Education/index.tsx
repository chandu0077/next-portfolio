const Education = () => {
  return (
    <div className="bg-black">
      <div
        className="w-full lg:w-4/5 mx-auto h-[500px] p-2 lg:p-10 bg-black"
        id="education"
      >
        <p className="text-[#70ff00] text-2xl p-1 mb-3 lg:text-3xl">
          education<span className="text-white text-md">( )</span>
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/5 flex justify-start lg:justify-center items-center">
            <div className="flex flex-col">
              <h2 className="text-[#70ff00] text-xl lg:text-2xl mb-2 font-semibold">
                Intermediate Edu (MPC)
              </h2>
              <h3 className="text-md  lg:text-xl text-white mb-3">
                Naryana Junior College (2016-2018)
              </h3>
              <p className="text-white">
                <span className="bg-[#70ff00] p-1 text-black rounded text-md">
                  95 /100
                </span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[2px] bg-[#70ff00] relative hidden lg:block">
            <div className="w-5 h-5 rounded-full bg-black border-2 border-[#70ff00] absolute left-[-9px] top-4"></div>
            <div className="w-5 h-5 rounded-full bg-black border-2 border-[#70ff00] absolute left-[-9px] top-24"></div>
            <div className="w-5 h-5 rounded-full bg-black border-2 border-[#70ff00] absolute left-[-9px] top-48"></div>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col justify-between gap-10">
            <div className="flex flex-col">
              <h2 className="text-[#70ff00] text-xl lg:text-2xl mb-3 font-semibold">
                Bachelor of Technology (CSE)
              </h2>
              <h3 className="text-white text-md lg:text-xl mb-3">
                Andhra Loyola Institute of Enginnering & Technology (2018-2022)
              </h3>
              <p className="text-white">
                <span className="bg-[#70ff00] p-1 text-black rounded text-sm">
                  CGPA - 8 /10
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#70ff00] text-xl xl:text-2xl mb-2 font-semibold">
                High School
              </h3>
              <h2 className="text-white text-md lg:text-xl mb-2">
                ST.Joseph`s E.M. High School - 2016
              </h2>
              <p className="text-white">
                <span className="bg-[#70ff00] p-1 text-black rounded text-sm">
                  CGPA - 8.5 /10
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
