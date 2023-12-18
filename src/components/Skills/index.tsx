const Skills = () => {
  return (
    <div className="bg-[#161616]" id="skills">
      <div className="w-full lg:w-4/5 mx-auto px-2 lg:px-6 py-12 bg-[#161616]">
        <p className="text-[#70ff00] text-2xl lg:text-3xl font-medium">
          skills<span className="text-white text-md">( )</span>
        </p>
        <div className="py-6 lg:py-12 max-w-xs lg:max-w-5xl flex flex-wrap justify-evenly">
          <img
            src="img/html-logo.png"
            alt="html"
            className="w-3/12 lg:w-1/12"
          />
          <img src="img/css-logo.png" alt="css" className="w-3/12 lg:w-1/12" />
          <img
            src="img/javascript-logo.png"
            alt="javascript"
            className="w-3/12 lg:w-1/12"
          />
          <img
            src="img/react-logo.png"
            alt="react"
            className="w-3/12 lg:w-1/12"
          />
          <img
            src="img/python-logo.png"
            alt="python"
            className="w-3/12 lg:w-1/12"
          />
          <img
            src="img/java-logo.png"
            alt="java"
            className="w-3/12 lg:w-1/12"
          />
          <img
            src="img/database-logo.png"
            alt="database"
            className="w-3/12 lg:w-1/12"
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
