import ProjectSlider from "./ProjectSlider";
const Projects = () => {
  return (
    <div>
      <div className="bg-[#212121] py-10" id="projects">
        <h2 className="text-[#70ff00] text-2xl lg:text-3xl font-medium w-4/5 mx-0 lg:mx-auto px-2 lg:px-6">
          projects<span className="text-white text-md">( )</span>
        </h2>

        <ProjectSlider />
      </div>
    </div>
  );
};
export default Projects;
