import React from "react";

const home = () => {
  return (
    <section id="home">
      <div className="min-h-screen flex justify-center items-center flex-col gap-10">
        <div className=" text-5xl font-bold text-center mb-4">
          Welcome to my site
        </div>
        <div className="text-center mt-5 text-lg max-w-2xl font-medium">
          <p>Aspiring Software Engineer with a strong foundation in Java, Python, and web development.
            Passionate about building scalable applications and eager to contribute innovative solutions in a dynamic team environment.</p>
        </div>
        <div className="flex justify-center space-x-8 mt-10 gap-10">
          <button className="p-4 bg-blue-500 rounded-xl text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition duration-300"><a href="#projects">Projects</a></button>
          <button className="p-4 bg-blue-500 rounded-xl text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition duration-300"><a href="/Rupam_resume.pdf"rel="noopener noreferrer" target="_blank">Resume</a></button>
        </div>
      </div>
    </section>
  );
};

export default home;
