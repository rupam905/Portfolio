import { BookOpenCheck, BrainCircuit, Code, GraduationCap } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Reveal } from "./Reveal";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Techno India University",
    duration: "Oct 2024 – 2026",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Techno India Institute of Technology",
    duration: "Jun 2021 – Jul 2024",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <TextGenerateEffect
            words="About Me"
            className="text-3xl md:text-4xl font-bold mb-12 text-center [&>div>div>div>span:nth-child(2)]:text-primary"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a software developer with a passion for building intuitive,
              reliable, and impactful web applications. Having completed my
              MCA, I'm committed to continuous learning and growth—both as a
              developer and as a problem-solver.
            </p>
            <p className="text-muted-foreground">
              As a Software Engineer Intern at Computer Software Solutions,
              I've built secure authentication systems and 30+ REST APIs
              using Express.js. I've also shipped projects like Kribb, a
              React Native real estate app, and QuickBlog, an AI-powered
              MERN blog platform—working across the stack from databases to
              polished user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button hover:scale-105 transition-transform">
                Get In Touch
              </a>
              <a
                href="/RupamDutta-resume.pdf" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                View Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="grid grid-cols-1 gap-6">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={1000}>
              <div className="p-6 card-hover h-full card-surface">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={1000}>
              <div className="p-6 card-hover h-full card-surface">
                  <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                      <BrainCircuit className="h-6 w-6 text-primary"/>
                      </div>
                      <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">Breaking down complex problems and building effective solutions.</p>
                  </div>
                  </div>
              </div>
            </Tilt>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={1000}>
              <div className="p-6 card-hover h-full card-surface">
                  <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                      <BookOpenCheck className="h-6 w-6 text-primary"/>
                      </div>
                      <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Growth</h4>
                  <p className="text-muted-foreground">Always exploring new tools and improving my skills.</p>
                  </div>
                  </div>
              </div>
            </Tilt>
          </Reveal>
        </div>

        <Reveal delay={0.5} className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Tilt
                key={edu.degree}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5} transitionSpeed={1000}
              >
                <div className="p-6 card-hover h-full card-surface">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-sm text-primary/80">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
