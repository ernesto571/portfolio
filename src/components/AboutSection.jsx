import { Briefcase, Code, User } from "lucide-react";
import ShootingStarsBackground from "./ShootingStarsBackground";

export const AboutSection = () => {
  return (
    <section  className="py-24 px-4 relative scroll-mt-16 min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <ShootingStarsBackground/>
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          About <span className="text-[#6859ba]">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-[#6859ba] hover:opacity-80 hover:scale-105 active:scale-95 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full border-[1px] border-[#6859ba] text-[#6859ba] hover:bg-[#6859ba] hover:text-white transition-all duration-300 font-semibold text-center">
                Download CV
              </a>
            </div>
          </div>

          {/* Right content - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <Code className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                    Web Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <User className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                    UI/UX Design
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6859ba]/10">
                  <Briefcase className="h-6 w-6 text-[#6859ba]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                    Project Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;