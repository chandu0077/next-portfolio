import React from "react";
import Socialblock from "./socialBlock";
const Header = () => {
  return (
    <div id="outer-container">
      <nav className="bg-[#1b1b1b] fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between gap-20">
            <div className="flex flex-1 items-center justify-between lg:justify-between w-full lg:w-[60%]">
              <div className="flex justify-center">
                <h2 className="text-gray-500 text-2xl mr-1 font-bold">SAI</h2>
                <h2 className="text-white text-2xl font-bold"> CHANDU</h2>
              </div>
              <div className="hidden lg:block sm:ml-6 text-lg">
                <div className="flex space-x-4">
                  <a
                    href="#about"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#education"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Education
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[40%] hidden lg:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex justify-around w-[100%]">
                <Socialblock type={"linkedin"} />
                <Socialblock type={"github"} />
                <Socialblock type={"contact"} />
              </div>
            </div>

            {/* <div className="block lg:hidden ">
              <Menubar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
