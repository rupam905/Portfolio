import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Engineer Intern",
    organization: "Computer Software Solutions",
    duration: "April 2026 – Present",
    description:
      "Building and maintaining full-stack web applications using React, Node.js, and MongoDB. Collaborating with the team to ship new features, fix bugs, and improve performance across the product.",
  },
  // {
  //   type: "education",
  //   title: "Bachelor of Computer Applications (BCA)",
  //   organization: "Your University Name",
  //   duration: "2020 – 2023",
  //   description:
  //     "Graduated with strong foundations in programming, databases, and computer science fundamentals.",
  // },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My journey so far — the roles, studies, and milestones that shaped
          who I am as a developer.
        </p>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.type];
            return (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-px flex-1 bg-border mt-1" />
                </div>

                <div className="flex-1 pb-10">
                  <div className="gradient-border p-6 card-hover">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
