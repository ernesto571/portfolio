// src/components/ProjectsSection.jsx
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fullstack Crypto Tracker",
    description: "Track, manage, and stay informed with crypto news, portfolios, and watchlists in one place",
    image: "/projects/fullstack-crypto-app.onrender.com_login (1).png",
    tags: ["React", "TailwindCSS", "Express",'Node','Mongo DB'],
    demoUrl: "https://fullstack-crypto-app.onrender.com/cryptocurrency?page=1",
    githubUrl: "https://github.com/ernesto571/fullstack-crypto-app",
  },
  {
    id: 2,
    title: "Fullstack Chat App",
    description:
      "A modern chat app with real-time messaging and seamless conversations",
    image: "/projects/cruz-chatty.onrender.com_.png",
    tags: ["React", "TailwindCSS", "Express",'Node','Mongo DB'],
    demoUrl: "https://cruz-chatty.onrender.com/",
    githubUrl: "https://github.com/ernesto571/cruz-chatty",
  },
  {
    id: 3,
    title: "Recipe Finder",
    description:
      "A smart recipe finder with endless meal ideas at your fingertips",
    image: "/projects/cruz-recipe-finder.netlify.app_.png",
    tags: ["HTML", "Javascript", "css"],
    demoUrl: "https://cruz-recipe-finder.netlify.app/",
    githubUrl: "https://github.com/ernesto571/html-css-javascript-projects/tree/main/recipe%20finder",
  },
];

export const ProjectsSection = () => {
  return (
    <section  className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Featured <span className="text-[#6859ba]">Projects</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto dark:text-white font-semibold">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className=" bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 dark:text-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                    key={`${project.id}-${i}`}
                      className="px-2 py-1 text-xs font-medium border border-gray-200 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600 dark:text-white text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-gray-700 dark:text-white hover:text-[#6859ba] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-700 dark:text-white hover:text-[#6859ba] transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6859ba] hover:opacity-60  text-white font-medium rounded-[10px] shadow transition-colors duration-300"
            target="_blank"
            href="https://github.com/ernesto571/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
