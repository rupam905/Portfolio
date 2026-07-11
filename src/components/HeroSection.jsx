import { ArrowDown } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/moving-border";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rupam</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Dutta</span>
          </h1>
           <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 h-16 sm:h-auto">
             <TypeAnimation
               sequence={[
                 "A software developer who builds fast, responsive web apps.",
                 2000,
                 "A software developer who loves clean code & thoughtful design.",
                 2000,
                 "A software developer who turns ideas into real-world projects.",
                 2000,
               ]}
               wrapper="p"
               speed={50}
               repeat={Infinity}
             />
           </div> 
        

        <div className="pt-8 opacity-0 animate-fade-in-delay-4 flex justify-center">
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.05} transitionSpeed={1000}>
              <Button
                as="a"
                href="#experience"
                borderRadius="1.75rem"
                className="bg-background text-foreground font-semibold"
                borderClassName="bg-[radial-gradient(var(--color-primary)_40%,transparent_60%)]"
              >
                View My Work
              </Button>
            </Tilt>
        </div>
      </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-primary/50 flex justify-center p-2 mb-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
      
    </section>
  );
};
