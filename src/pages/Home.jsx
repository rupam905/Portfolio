import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ExperienceSection from "../components/ExperienceSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
export const Home = () =>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* background effects */}
        <StarBackground />
        {/* navbar */}
        <Navbar/>
        {/* main content */}
        <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
        </main>
        {/* footer */}
        <Footer/>
    </div>
    )
}