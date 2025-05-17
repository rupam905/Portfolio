import React from "react";
import About from "./About";
const navbar = () => {
  return (
    <div>
      <div className="fixed w-full z-40 top-0 backdrop-blur-lg h-16 flex text-blue-900 justify-evenly items-center border-b-[0.1px] border-slate-600">
        <div className=" text-2xl font-bold mx-5"><a href="#home">Rupam Dutta</a></div>

        <div>
          <div className="hidden md:flex items-center space-x-10 font-semibold text-lg">
            <div className="hover:text-blue-400 transition duration-200"><a href="#about">About</a></div>
            <div className="hover:text-blue-400 transition duration-200"><a href="#projects">Projects</a></div>
            <div className="hover:text-blue-400 transition duration-200"><a href="#contact">Contact</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
