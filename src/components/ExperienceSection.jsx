import { Briefcase, GraduationCap } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Reveal } from "./Reveal";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const experiences = [
  {
    type: "work",
    title: "Software Development Engineer Intern",
    organization: "Computer Software Solutions",
    duration: "April 2026 – Present",
    description:
      "Contributed to the design, development, and maintenance of software applications, writing clean and efficient code, fixing bugs, and collaborating with the team to deliver reliable features.",
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Reveal>
          <TextGenerateEffect
            words="My Experience"
            className="text-3xl md:text-4xl font-bold mb-4 text-center [&>div>div>div>span:nth-child(2)]:text-primary"
          />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My journey so far — the roles, studies, and milestones that shaped
            who I am as a developer.
          </p>
        </Reveal>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.type];
            return (
              <Reveal key={index} delay={index * 0.2}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 border border-primary/50 shrink-0 cosmic-glow">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="w-px flex-1 bg-primary/30 cosmic-glow mt-1" />
                  </div>

                  <div className="flex-1 pb-10">
                    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} transitionSpeed={1000}>
                      <div className="p-6 card-hover card-surface">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                          <h3 className="text-lg font-semibold text-left leading-snug">
                            {exp.title}
                          </h3>
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-primary/80 text-left mb-3">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground text-left">
                          {exp.description}
                        </p>
                      </div>
                    </Tilt>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
