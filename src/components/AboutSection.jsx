import { BookOpenCheck, BrainCircuit, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a software developer with a passion for building intuitive,
              reliable, and impactful web applications. Currently pursuing my
              MCA, I'm committed to continuous learning and growth—both as a
              developer and as a problem-solver.
            </p>
            <p className="text-muted-foreground">
              Whether I'm working on a personal project or collaborating on a
              team, I enjoy turning ideas into meaningful digital experiences.
              I'm especially driven by clean design, good user experience, and
              writing code that's both efficient and maintainable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/projects/RupamDutta_resume.pdf" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
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
            <div className="gradient-border p-6 card-hover">
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
            <div className="gradient-border p-6 card-hover">
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
          </div>
        </div>
      </div>
    </section>
  );
};
