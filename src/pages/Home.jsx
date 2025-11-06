import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ShootingStarsBackground from "../components/ShootingStarsBackground";
import SkillsSection from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

function Home() {
    return (
        <div className="bg-white dark:bg-gray-900 max-h-screen transition-colors duration-300">
            <Navbar />
            <ShootingStarsBackground/>
            
            {/* Add some content to see the theme changes better */}
            <section id="home">
                <HeroSection/>
            </section>

            <section id="about" >
                <AboutSection/>
            </section>

            <section id="skills" >
                <SkillsSection/>
            </section>

            <section id="project" >
                <ProjectsSection/>
            </section>

            <section id="contact" >
                <ContactSection/>
            </section>

            
        </div>
    );
}

export default Home;