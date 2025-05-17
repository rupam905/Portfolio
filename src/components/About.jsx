import React from "react";

const About = () => {
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express.js"];
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-150px)] flex justify-center items-center flex-col bg-gray-50">
      <div className="max-w-3xl px-4 mx-auto">
        <h2 className="font-bold text-4xl text-center text-blue-950">
          About me
        </h2>

        <div className="text-center mt-5 text-lg max-w-2xl font-medium">
          <p className="mb-10 text-gray-500">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border shadow hover:border-blue-300 transition-all ">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    ">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 border shadow hover:border-blue-300 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          </div>
        </div>
        <div className="grid-cols-1 md:grid-cols-2 gap-6 mt-8 flex justify-center">
          <div className="p-6 rounded-xl border-white/10 border">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong> Master of Computer Applications </strong>
              </li>
              <li>Techno India University (2024-2026)</li>
              <li>
                <strong> Bachelor of Computer Applications </strong>
              </li>
              <li>Techno India Institute of Technology (2021-2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;